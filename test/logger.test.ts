import { assertEquals } from "./deps.ts";

import logger from "../src/logger.ts";
import { stub } from "./deps.ts";
Deno.test({
  name: "logger should log",
  ignore: false,
  only: false,
  fn: () => {
    const log = stub(globalThis.console, "info");
    assertEquals(logger.info("There is no test now"), ["There is no test now"]);
    assertEquals(log.calls.length, 1);
    log.restore();
  },
});
