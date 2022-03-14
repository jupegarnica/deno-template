import { parse } from "https://deno.land/std@0.129.0/flags/mod.ts";

const parsedArgs = parse(Deno.args)
console.dir(parsedArgs);
export default 42;
// import { opn } from "https://denopkg.com/hashrock/deno-opn/opn.ts";

// const args = Deno.args.join(" ");

// if (import.meta.main) {
//   await opn(args);
// }
