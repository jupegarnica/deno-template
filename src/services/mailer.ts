import {
  // quotedPrintableEncode,
  SmtpClient,
} from "https://deno.land/x/denomailer@0.12.0/mod.ts";

const client = new SmtpClient();

const options = ({
  hostname: Deno.env.get("SMTP_HOSTNAME") || "smtp.sendgrid.net",
  port: Number(Deno.env.get("SMTP_PORT") || "465"),
  username: Deno.env.get("SMTP_USERNAME") || "apikey",
  password: Deno.env.get("SMTP_PASSWORD") || "",
});

await client.connectTLS(options);

// await client.send({
//   from: "mailaddress@163.com",
//   to: "Me <to-address@xx.com>",
//   cc: [
//     "name@example.de",
//     "<name@example.de>",
//     "NAME <name@example.de>",
//     { mail: "name@example.de" },
//     { mail: "name@example.de", name: "NAME" },
//   ],
//   bcc: {
//     "Me": "to-address@xx.com",
//   },
//   subject: "Mail Title",
//   content: "Mail Content",
//   html: "<a href='https://github.com'>Github</a>",
//   date: "12 Mar 2022 10:38:05 GMT",
//   priority: "high",
//   replyTo: "mailaddress@163.com",
//   attachments: [
//     {
//       encoding: "text",
//       content: "Hi",
//       contentType: "text/plain",
//       filename: "text.txt",
//     },
//     {
//       encoding: "base64",
//       content: "45dasjZ==",
//       contentType: "image/png",
//       filename: "img.png",
//     },
//     {
//       content: new Uint8Array([0, 244, 123]),
//       encoding: "binary",
//       contentType: "image/jpeg",
//       filename: "bin.png",
//     },
//   ],
//   mimeContent: [
//     {
//       mimeType: "application/markdown",
//       content: quotedPrintableEncode("# Title\n\nHello World!"),
//       transferEncoding: "quoted-printable",
//     },
//   ],
// });

await client.close();

export default client;

const _ = 42;
