import {
  // quotedPrintableEncode,
  SMTPClient,
} from "https://deno.land/x/denomailer@1.5.2/mod.ts";

const hostname = Deno.env.get("SMTP_HOSTNAME") || "smtp.sendgrid.net";
const port = Number(Deno.env.get("SMTP_PORT") || "465");
const username = Deno.env.get("SMTP_USERNAME") || "apikey";
const password = Deno.env.get("SMTP_PASSWORD") || "";

const client = new SMTPClient({
  connection: {
    hostname,
    port,
    tls: port === 465 || port === 587 || port === 25,
    auth: {
      username,
      password,
    },
  },
});

// await client.send({
//   from: "me@example.com",
//   to: "you@example.com",
//   subject: "example",
//   content: "...",
//   html: "<p>...</p>",
// });

// await client.close();
export default client;
