import { isAsyncFunction, isPromise } from "./src";

// isPromise
const promise = new Promise(res => setTimeout(() => res(1), 50)) as Promise<number> | number

if (isPromise(promise)) {
    promise;
    const d = await promise;
    console.log("if", { promise, d });
} else {
    promise;
    console.log("else", { promise });
}

// isAsyncFunction
const asyncFn = (async () => { }) as unknown as (() => Promise<number>) | (() => number)

if (isAsyncFunction<number, () => Promise<number>>(asyncFn)) {
    const p = asyncFn();
    const d = await p;
    console.log("if", { p, d });
} else {
    const d = asyncFn();
    console.log("else", { d });
}
