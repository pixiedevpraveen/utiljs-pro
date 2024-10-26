# utiljs-pro

To install:

```bash
# npm
npm install utiljs-pro

# bun
bun add utiljs-pro

# yarn
yarn add utiljs-pro

# pnpm
pnpm add utiljs-pro
```

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

```ts
// isPromise
const promise = new Promise(res => setTimeout(() => res(1), 50)) as Promise<number> | number

if (isPromise(obj)) { // true
    obj; // hovering on obj shows the type as Promise<number>
    const d = await obj; // now hovering on d shows the type as number
} else {
    obj; // hovering on obj shows the type as number
}

```


```ts
// isAsyncFunction
const asyncFn = (async () => { }) as unknown as (() => Promise<number>) | (() => number)
if (isAsyncFunction<number, () => Promise<number>>(asyncFn)) { // true
    const p = asyncFn(); // hovering on function shows the type as (() => Promise<number>) and on p as Promise<number>
    const d = await p; // now hovering on d shows the type as Promise<number>
} else {
    const d = asyncFn(); // hovering on function shows the type as (() => number) and on d as number
}
```
