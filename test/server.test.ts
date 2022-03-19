// test server api rest with fetch

const { test } = Deno;
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

console.log(Deno.env.get("TEST_SERVER"));
test({
    name: '[server] test api rest',
    ignore: !Deno.env.get("TEST_SERVER"),
    async fn() {

        const res = await fetch("http://localhost:8080/api/v1/user/1");
        const html = await res.text();
        assertEquals(res.status, 200);
        assertEquals(html.length > 1000, true);
    }
})