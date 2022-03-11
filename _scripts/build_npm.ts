import { build } from "https://deno.land/x/dnt@0.7.4/mod.ts";

import {
  dirname,
  fromFileUrl,
  resolve,
} from "https://deno.land/std@0.117.0/path/mod.ts";

const baseDir = resolve(dirname(fromFileUrl(import.meta.url)), "..");

await build({
  entryPoints: [resolve(baseDir, "mod.ts")],
  outDir: resolve(baseDir, "npm"),
  test: true,
  compilerOptions: {
    sourceMap: true,
  },
  package: {
    name: prompt("Package name: ", "deno-npm") || "",
    version: prompt("Package version: ", "0.0.1") || "",
    description: prompt("Package description: ", "") || "",
    license: prompt("Package license: ", "MIT") || "",
    sideEffects: false,
    "publishConfig": {
      "access": "public",
    },
    author: {
      name: prompt("Author name: ", "Deno") || "",
      email: prompt("Author email: ", "") || "",
      url: prompt("Author url: ", "https://deno.land/") || "",
    },
    repository: {
      type: "git",
      url: prompt("Repository url: ", "") || "",
    },
    bugs: {
      url: prompt("Bugs url: ", "") || "",
    },
    homepage: prompt("Homepage: ", "") || "",
    funding: {
      type: "patreon",
      url: prompt("Funding url: ", "") || "",
    },
    keywords: [
      prompt("Keyword: ", "") || "",
    ],
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
