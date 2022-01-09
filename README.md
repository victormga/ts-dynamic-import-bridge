
# TS-DYNAMIC-IMPORT-BRIDGE

Allows you to import **ES MODULES** in a typescript CommonJS project.

Instalation:
```bash
npm i https://github.com/victormga/ts-dynamic-import-bridge
```


## Usage

```typescript

import dynamicImport from "ts-dynamic-import-bridge";

[...]

// only works in async
async function load(): Promise<void> {
  const myEsModule = await dynamicImport<myEsModuleType>("my-esmodule-name");
}

```

*Modules are cached by default by node api. If this is not your intention, check [this post](https://ar.al/2021/02/22/cache-busting-in-node.js-dynamic-esm-imports/).*

## License

ISC License (ISC)

  

Copyright 2021 - Victor Hugo Sabiar

  

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.