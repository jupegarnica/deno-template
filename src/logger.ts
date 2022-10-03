import logger, {
  formatToAnsiColors,
} from "https://deno.land/x/garn_logger@0.0.21/mod.ts";

logger.setFilter(Deno.env.get("LOG_LEVEL") || "debug");
logger.use(
  formatToAnsiColors({
    depth: 3,
    timestamp: "HH:mm:ss",
    multiline: true,
    showScope: true,
    showMethod: true,
    useColor: true,
  }),
);

// logger.debug("debug");
// logger.info("info");
// logger.warn("warn");
// logger.error("error");
// logger.fatal("fatal");
// logger.critical("critical");
// logger.dim("dim");
// logger.italic("italic");
// logger.underline("underline");
// logger.blink("blink");
// logger.inverse("inverse");
// logger.hidden("hidden");
// logger.strikethrough("strikethrough");
// logger.black("black");
// logger.red("red");
// logger.green("green");
// logger.yellow("yellow");
// logger.blue("blue");
// logger.magenta("magenta");
// logger.cyan("cyan");
// logger.white("white");
// logger.gray("gray");
// logger.bgBlack("bgBlack");
// logger.bgRed("bgRed");

export default logger;
