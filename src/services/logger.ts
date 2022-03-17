import logger from "https://deno.land/x/garn_logger@0.0.14/mod.ts";

logger.setFilter(Deno.env.get("LOG_LEVEL") || "info");

export default logger;
