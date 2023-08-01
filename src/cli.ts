import {
  Cell,
  Row,
  Table,
} from "https://deno.land/x/cliffy@v1.0.0-rc.3/table/mod.ts";

new Table()
  .header(Row.from(["Name", "Date", "City", "Country"]).border(true))
  .body([
    [
      "Baxter Herman",
      new Cell("Oct 1, 2020").border(true),
      "Row 1 Column 3",
      "Harderwijk",
      "Slovenia",
    ],
    new Row("Jescie Wolfe", "Dec 4, 2020", "Alto Hospicio", "Japan").border(
      true,
    ),
    ["Allegra Cleveland", "Apr 16, 2020", "Avernas-le-Bauduin", "Samoa"],
    ["Aretha Gamble", "Feb 22, 2021", "Honolulu", "Georgia"],
  ])
  .render(); // import {
//     Checkbox,
//     Confirm,
//     Number,
//     prompt,
//   } from "https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/mod.ts";

//   const result = await prompt([{
//     name: "animals",
//     message: "Select some animals",
//     type: Checkbox,
//     options: ["dog", "cat", "snake"],
//   }, {
//     name: "like",
//     message: "Do you like animals?",
//     type: Confirm,
//     after: async ({ like }, next) => { // executed after like prompt
//       if (like) {
//         await next(); // run age prompt
//       } else {
//         await next("like"); // run like prompt again
//       }
//     },
//   }, {
//     name: "age",
//     message: "How old are you?",
//     type: Number,
//     before: async ({ animals }, next) => { // executed before age prompt
//       if (animals?.length === 3) {
//         await next(); // run age prompt
//       } else {
//         await next("animals"); // begin from start
//       }
//     },
//   }]);

//   console.log(result);
