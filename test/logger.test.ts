import { assertEquals } from "../dev_deps.ts";

import logger, { console } from "../src/services/logger.ts"
import { stub } from "../dev_deps.ts";
import type { Stub } from "../dev_deps.ts";
Deno.test({
  name: "logger should log",
  ignore: false,
  only: false,
  fn: () => {
    const log: Stub<Console> = stub(console, "info");
    assertEquals(logger.info("There is no test now"), ["There is no test now"]);
    assertEquals(log.calls.length, 1);
    log.restore();
  },
});
