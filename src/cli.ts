
import { parse } from "https://deno.land/std@0.129.0/flags/mod.ts";

console.dir(parse(Deno.args));


// import { opn } from "https://denopkg.com/hashrock/deno-opn/opn.ts";

// const args = Deno.args.join(" ");

// if (import.meta.main) {
//   await opn(args);
// }
