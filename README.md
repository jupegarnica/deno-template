# deno-dev-template

My deno template for rapid development.

## tasks

Run `deno task` o see `deno.jsonc`.

```
- bench
    deno bench -A --unstable --ignore=.cache --no-prompt
- build-npm
    deno run -A https://deno.land/x/dnt_prompt/main.ts
- cache
    DENO_DIR=.cache deno cache --lock=lock.json --lock-write src/deps.ts test/deps.ts
- ci
    deno lint && deno fmt --check && deno task test
- debug
    deno run --inspect-brk src/main.ts
- dev
    deno run -A --watch src/main.ts
- publish-npm
    deno task build-npm && npm publish
- release
    deno task version patch && git push --tags origin main
- server
    deno run --allow-net --allow-env --allow-read=.  src/server.ts
- server-timeout
    timeout 5 deno task server || exit 0
- start
    deno run src/main.ts
- test
    deno test -A --ignore=.cache --no-prompt --coverage=.coverage
- test-cov
    deno task test && deno coverage .coverage
- test-doc
    deno task test --doc
- test-server
    deno task server-timeout & sleep 1 && TEST_SERVER=1  deno task test -- --filter=[server]
- test-watch
    deno task test --watch test
- udd
    deno run -A https://deno.land/x/udd/main.ts --test='deno task test'  'src/**/*.ts' 'test/**/*.ts'
- version
    deno run  -A https://deno.land/x/version/index.ts
```

## Files

```
.
├── .vscode
│   └── settings.json
├── .gitignore
├── .github/workflows
│   ├── ci.yml.ts
│   ├── udd.yml
│   └── todos_issues.yml
├── deno.jsonc
├── LICENSE
├── lock.json
├── README.md
├── scripts.yml
├── src
│   ├── cli.ts
│   ├── commitlint.ts
│   ├── deps.ts
│   ├── logger.ts
│   ├── mailer.ts
│   ├── main.ts
│   └── server.ts
├── test
│   ├── deps.ts
│   ├── logger.bench.ts
│   ├── logger.test.ts
│   ├── server.test.ts
│   └── test_server.http
└── VERSION
```

The scripts are defined in [deno.jsonc](deno.jsonc).
