import logger, { console } from "https://deno.land/x/garn_logger@0.0.15/mod.ts";

logger.setFilter(Deno.env.get("LOG_LEVEL") || "debug");

export default logger;
export { console };
