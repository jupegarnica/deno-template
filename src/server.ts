import { ConnInfo, serve } from "../deps.ts";
import { createReporter } from "https://deno.land/x/g_a@0.1.2/mod.ts";
const port = 8080;

if (!Deno.env.get("DENO_DEPLOYMENT_ID")) {
  console.log(`HTTP server listening on http://localhost:${port}`);
}

const ga = createReporter({
  id: Deno.env.get("GA_UA") || "UA-XXXXX-Y",
});
function isNetAddr(addr: Deno.Addr): addr is Deno.NetAddr {
           return Object.hasOwn(addr, "hostname");
}

const html = String.raw;
const toHtml = ({ CSS, body }: { CSS: string; body: string }) =>
  html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          background-color: var(--color-canvas-default, initial);
        }
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 1em;
        }
        html, body {
            margin: 0;
            padding: 0;
        }
        ${CSS}
      </style>
    </head>
    <body data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" class="markdown-body" >
      <main>
        ${body}
      </main>
    </body>
  </html>
  `;

async function handler(req: Request, conn: ConnInfo) {
  let err;
  let res: Response;
  const start = performance.now();
  try {
    const { localAddr, remoteAddr } = conn;
    if (!isNetAddr(localAddr) || !isNetAddr(remoteAddr)) {
      throw new Error("not net addr");
    }
    const headers = {
      "x-local-addr": `${localAddr.hostname}:${localAddr.port}`,
      "x-remote-addr": `${remoteAddr.hostname}:${remoteAddr.port}`,
      "content-type": "text/html",
    };

    const markdown = await Deno.readTextFile("./README.md");
    const body = markdown;

    res = new Response(toHtml({ CSS: "", body }), {
      headers,
    });
  } catch (e) {
    err = e;
  } finally {
    ga(req, conn, res!, start, err);
  }
  return res!;
}

await serve(handler, { port });
