import logger from "https://deno.land/x/garn_logger/mod.ts";

logger.setFilter(Deno.env.get("LOG_LEVEL") || "debug");

export { logger };
