// test server api rest with fetch

import { assertEquals } from "./deps.ts";

Deno.test({
  name: "[server] test api rest",
  ignore: !Deno.env.get("TEST_SERVER"),
  async fn() {
    const res = await fetch("http://localhost:8080/");
    const html = await res.text();
    assertEquals(res.status, 200);
    assertEquals(html.length > 100, true);
  },
});
