import logger from "../src/logger.ts";

import { stub } from "./deps.ts";
stub(console, "log");

Deno.bench({
  name: "logger logs",
  ignore: false,
  only: false,
  // permissions: 'none',
  fn: () => {
    logger.log("benchmarking");
  },
});
