import { test, expect } from "bun:test";
import { isIndexOf, isPromise, isAsyncFunction } from ".";

test('isIndexOf', () => {
    expect(isIndexOf(0, [1, 2, 3])).toBe(true);
    expect(isIndexOf(1, [1, 2, 3])).toBe(true);
    expect(isIndexOf(2, [1, 2, 3])).toBe(true);
    expect(isIndexOf(3, [1, 2, 3])).toBe(false);
    expect(isIndexOf('0', [1, 2, 3])).toBe(true);
    expect(isIndexOf('1', [1, 2, 3])).toBe(true);
    expect(isIndexOf('2', [1, 2, 3])).toBe(true);
    expect(isIndexOf('3', [1, 2, 3])).toBe(false);
    expect(isIndexOf(-1, [1, 2, 3])).toBe(false);
    expect(isIndexOf(1.5, [1, 2, 3])).toBe(false);
    expect(isIndexOf(null, [1, 2, 3])).toBe(false);
    expect(isIndexOf(undefined, [1, 2, 3])).toBe(false);
    expect(isIndexOf(true, [1, 2, 3])).toBe(false);
    expect(isIndexOf({}, [1, 2, 3])).toBe(false);
    expect(isIndexOf([], [1, 2, 3])).toBe(false);
    expect(isIndexOf(() => { }, [1, 2, 3])).toBe(false);
    expect(isIndexOf(new Date(), [1, 2, 3])).toBe(false);
    expect(isIndexOf(new Set(), [1, 2, 3])).toBe(false);
    expect(isIndexOf(new Map(), [1, 2, 3])).toBe(false);
    expect(isIndexOf(Symbol(), [1, 2, 3])).toBe(false);
    expect(isIndexOf(new Error(), [1, 2, 3])).toBe(false);
    expect(isIndexOf(new RegExp(''), [1, 2, 3])).toBe(false);
});

test('isPromise', () => {
    const promise: Promise<void> | unknown = new Promise(res => setTimeout(res, 50))
    const nonPromise: number | Promise<number> = 165

    expect(isPromise(promise)).toBe(true)
    expect(isPromise(nonPromise)).toBe(false)
})

test('isAsyncFunction', () => {
    const asyncFn = (async () => { }) as unknown as (() => Promise<number>) | (() => number)
    const nonAsyncFn = (() => { }) as unknown as (() => Promise<number>) | (() => number)

    expect(isAsyncFunction(asyncFn)).toBe(true)
    expect(isAsyncFunction(nonAsyncFn)).toBe(false)
})
