import { SmtpClient } from "https://deno.land/x/denomailer@0.9.0/mod.ts";

const client = new SmtpClient();

const options = ({
  hostname: Deno.env.get("SMTP_HOSTNAME") || "smtp.sendgrid.net",
  port: Number(Deno.env.get("SMTP_PORT") || "465"),
  username: Deno.env.get("SMTP_USERNAME") || "apikey",
  password: Deno.env.get("SMTP_PASSWORD") || "",
});

await client.connectTLS(options);

await client.send({
  from: "juan@garn.dev",
  to: "jupegarnica@gmail.com",
  subject: "Mail Title",
  content: "Mail Content",
  html: "<a href='https://github.com'>Github</a>",
});

await client.close();
