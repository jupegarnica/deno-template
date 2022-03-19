import logger from "../src/services/logger.ts";

import { stub } from "../dev_deps.ts";
// import type { Stub } from "../dev_deps.ts";

// const log: Stub<Console> =
stub(console, "log");

Deno.bench({
  name: "logger logs",
  ignore: false,
  only: false,
  n: 1e4,
  warmup: 1e3,
  // permissions: 'none',
  fn: () => {
    logger.log("benchmarking");
  },
});
