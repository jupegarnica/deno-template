import { assert } from "../dev_deps.ts";
Deno.test({
  name: "Demo",
  ignore: false,
  only: false,
  fn: () => {
    console.log("There is no test now");
    assert(true);
  },
});
