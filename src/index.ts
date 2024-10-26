/**
 * Checks if an index exists in an array-like object.
 * @param {unknown | number} idx - The index to check.
 * @param {ArrayLike<T>} array - The array-like object to check against.
 * @returns {boolean} True if the index exists in the array, false otherwise.
 * @example
 * const array = [1, 2, 3];
 * isIndexOf(1, array); // true
 * isIndexOf(3, array); // false
 */
export const isIndexOf = <T>(idx: unknown | number, array: ArrayLike<T>): idx is keyof typeof array => {
    if (typeof idx === 'string' && idx) idx = Number(idx)
    return typeof idx === 'number' && !isNaN(idx) && Number.isInteger(idx) && idx >= 0 && idx < array.length;
}

/**
 * Checks if a value is an array-like object.
 * @param {unknown} array - The value to check.
 * @returns {boolean} True if the value is array-like, false otherwise.
 * @example
 * isArray([1, 2, 3]); // true
 * isArray('not an array'); // false
 */
export const isArray = <T, A = ArrayLike<T>>(array: unknown): array is A => {
    return Array.isArray(array);
}

/**
 * Checks if a value is indexable (array-like).
 * @param {unknown} array - The value to check.
 * @returns {boolean} True if the value is indexable, false otherwise.
 * @example
 * isIndexable([1, 2, 3]); // true
 * isIndexable('not indexable'); // false
 */
export const isIndexable = <T, A = ArrayLike<T>>(array: unknown): array is A => {
    return Array.isArray(array) && array.length != 0;
}

/**
 * Throttles a function so that it can only be called once every specified delay.
 * @param {((...args: any[]) => void} fn - The function to throttle.
 * @param {number} delay - The delay in milliseconds.
 * @returns {((...args: any[]) => void} The throttled function.
 * @example
 * const throttledLog = throttle(() => console.log('Throttled!'), 1000);
 * window.addEventListener('resize', throttledLog);
 */
export const throttle = <T extends (...args: any[]) => void>(fn: T, delay: number): ((...args: any[]) => void) => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>) => {
        if (!timer) {
            fn(...args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        }
    }
}

/**
 * Debounces a function so that it can only be called after a specified delay since the last call.
 * @param {(...args: any[]) => void} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {(...args: any[]) => void} The debounced function.
 * @example
 * const debouncedLog = debounce((a: string) => console.log(`Debounced: ${a}`), 1000);
 * window.addEventListener('scroll', (evt: Event) => debouncedLog(evt.type));
 */
export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number): (...args: any[]) => void => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

/**
 * Delays execution for a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the delay.
 * @example
 * async function run() {
 *   await sleep(1000);
 *   console.log('1 second later');
 * }
 * run();
 */
export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Validates if a string is a valid email address.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 */
export const isEmail = (email: string): boolean => {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
}

/**
 * a regular expression for validating email addresses.
 * @example
 * emailRegex.test('test@example.com'); // true
 */
export const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

/**
 * Validates if a string is a valid phone number.
 * @param {string} phone - The phone string to validate.
 * @returns {boolean} True if the phone is valid, false otherwise.
 * @example
 * isPhone('+1234567890'); // true
 * isPhone('invalid-phone'); // false
 */
export const isPhone = (phone: string): boolean => {
    return /^1[3456789]\d{9}$/.test(phone);
}

/**
 * Removes an item from an array.
 * @param {T} item - The item to remove.
 * @param {T[]} array - The array to remove the item from.
 * @example
 * const array = [1, 2, 3];
 * remove(2, array);
 * console.log(array); // [1, 3]
 */
export const remove = <T>(item: T, array: T[]): T[] => {
    const idx = array.indexOf(item);
    return array.splice(idx, 1);
}

/**
 * Removes an item using the index from an array.
 * @param {T} item - The index of item to remove.
 * @param {T[]} array - The array to remove the item from.
 * @example
 * const array = [1, 2, 3];
 * removeAtIndex(1, array);
 * console.log(array); // [1, 3]
 */
export const removeAtIndex = <T>(array: T[], index: number): T[] => {
    return array.splice(index, 1);
}

/**
 * Merges two arrays into one.
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {T[]} The merged array.
 * @example
 * const array1 = [1, 2];
 * const array2 = [3, 4];
 * const merged = merge(array1, array2);
 * console.log(merged); // [1, 2, 3, 4]
 */
export const merge = <T>(a: T[], b: T[]): T[] => [...a, ...b];


/**
 * Removes duplicate items from an array.
 * @param {T[]} array - The array to make unique.
 * @returns {T[]} A new array with unique items.
 * @example
 * const array = [1, 1, 2, 2, 3];
 * const uniqueArray = unique(array);
 * console.log(uniqueArray); // [1, 2, 3]
 */
export const unique = <T>(array: T[]): T[] => {
    return Array.from(new Set(array));
}

/**
 * Generates a random number between min and max.
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} A random number between min and max.
 * @example
 * const randomNumber = random(1, 10);
 * console.log(randomNumber); // e.g., 7
 */
export const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Checks if a value is a string.
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 * @example
 * isString('hello'); // true
 * isString(123); // false
 */
export const isString = (value: unknown): value is string => typeof value === 'string';

/**
 * Checks if a value is a number.
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 * @example
 * isNumber(123); // true
 * isNumber('123'); // false
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number';

/**
 * Shuffles an array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @example
 * const array = [1, 2, 3, 4];
 * const shuffled = shuffle(array);
 * console.log(shuffled); // e.g., [3, 1, 4, 2]
 */
export const shuffle = <T>(array: T[]): T[] => {
    let m = array.length, t: T, i: number;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
};

/**
 * Deep clones an object or array.
 * @param {T} obj - The object or array to clone.
 * @returns {T} A deep clone of the object or array.
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * console.log(clone); // { a: 1, b: { c: 2 } }
 */
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 * @example
 * toTitleCase('hello world'); // 'Hello World'
 */
export const toTitleCase = (str: string): string =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

/**
 * Groups an array of objects by a key.
 * @param {T[]} array - The array to group.
 * @param {keyof T} key - The key to group by.
 * @returns {Record<string, T[]>} An object with keys representing group names and values being arrays of grouped items.
 * @example
 * const array = [{ category: 'A', value: 1 }, { category: 'B', value: 2 }, { category: 'A', value: 3 }];
 * const grouped = groupBy(array, 'category');
 * console.log(grouped); // { A: [{ category: 'A', value: 1 }, { category: 'A', value: 3 }], B: [{ category: 'B', value: 2 }] }
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> =>
    array.reduce((result, currentValue) => {
        const groupKey = currentValue[key] as unknown as string;
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(currentValue);
        return result;
    }, {} as Record<string, T[]>);

/**
 * Checks if an object is empty.
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 * @example
 * isEmptyObject({}); // true
 * isEmptyObject({ a: 1 }); // false
 */
export const isEmptyObject = (obj: object): boolean =>
    Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * Formats a number as currency.
 * @param {number} value - The number to format.
 * @param {string} [currency='USD'] - The currency code.
 * @returns {string} The formatted currency string.
 * @example
 * formatCurrency(1234.56); // '$1,234.56' (use local currency by default)
 * formatCurrency(1234.56, 'USD', 'en-US'); // '$1,234.56'
 * formatCurrency(1234.56, 'EUR', 'en-GB'); // '€1,234.56'
 */
export const formatCurrency = (value: number, currency?: string, locales?: string): string =>
    new Intl.NumberFormat(locales, { style: 'currency', currency }).format(value);

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 * @example
 * capitalize('hello'); // 'Hello'
 */
export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Compares two arrays for equality.
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 * @example
 * arraysEqual([1, 2, 3], [1, 2, 3]); // true
 * arraysEqual([1, 2, 3], [1, 2, 4]); // false
 */
export const arraysEqual = <T>(a: T[], b: T[]): boolean =>
    a.length === b.length && a.every((v, i) => v === b[i]);

/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the string.
 * @returns {string} The random string.
 * @example
 * const randomStr = randomString(5);
 * console.log(randomStr); // e.g., 'abcde'
 */
export const randomString = (length: number): string =>
    Math.random().toString(36).substring(2, length);

/**
 * Parses a query string into an object.
 * @param {string} queryString - The query string to parse.
 * @returns {Record<string, string>} The parsed object.
 * @example
 * const obj = parseQueryString('?a=1&b=2');
 * console.log(obj); // { a: '1', b: '2' }
 */
export const parseQueryString = (queryString: string): Record<string, string> =>
    queryString.replace(/^\?/, '').split('&').reduce((acc, pair) => {
        const [key, value] = pair.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
        return acc;
    }, {} as Record<string, string>);



export type FormEvent = SubmitEvent & {
    currentTarget: EventTarget & HTMLFormElement;
}

/**
 * convert form/inputs data to json object on submit.
 * @example
 * <form onSubmit={formSubmitJson((data, e) => {
 *  e.preventDefault()
 *  console.log(data) // {a: 1, b: 2}
 * })}>
 * <input type="number" name="a" />
 * <input type="number" name="b" />
 * </form>
 */
export const formSubmitJson = (onSubmit: <T = Record<string, any>>(data: T, e: FormEvent) => void): (<T>(e: FormEvent) => void) => <T>(e: FormEvent) => {
    const formData = new FormData(e.currentTarget)
    const json: Record<string, any> = {}
    formData.forEach((_, key) => {
        json[key] = formData.getAll(key).length > 1 ?
            formData.getAll(key) : formData.get(key)
    })

    onSubmit(json as T, e)
}


/**
 * Checks if an element is visible in the viewport.
 * @param {Element} element - The element to check.
 * @returns {boolean} True if the element is visible, false otherwise.
 * @example
 * const element = document.getElementById('myElement');
 * isElementVisible(element);
 */
export function isElementVisible(element: Element): boolean {
    if (!element) {
        return false;
    }

    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * This function check the provided value is promise or not, without calling it and reflect in typescript type.
 * @param obj value to check if its promise or not.
 * @returns boolean
 * 
 * @example
 * const promise = new Promise(res => setTimeout(() => res(1), 50)) as Promise<number> | number
 * 
 * if (isPromise(obj)) { // true
 *     obj; // hovering on obj shows the type as Promise<number>
 *     const d = await obj; // now hovering on d shows the type as number
 * } else {
 *     obj; // hovering on obj shows the type as number
 * }
 */
export function isPromise<T extends Promise<any>>(obj: unknown): obj is T {
    return obj instanceof Promise
}

/**
 * This function check the provided function is async or not, without calling it and reflect in typescript type.
 * @param func function to check if its async or not.
 * @returns boolean
 * 
 * @example
 * const asyncFn = (async () => { }) as unknown as (() => Promise<number>) | (() => number)
 * if (isAsyncFunction<number, () => Promise<number>>(asyncFn)) { // true
 *     const p = asyncFn(); // hovering on function shows the type as (() => Promise<number>) and on p as Promise<number>
 *     const d = await p; // now hovering on d shows the type as Promise<number>
 * } else {
 *     const d = asyncFn(); // hovering on function shows the type as (() => number) and on d as number
 * }
 */
export function isAsyncFunction<R extends unknown, T extends (() => Promise<R>)>(func: unknown): func is T {
    return typeof func === 'function' && func?.toString().startsWith('async')
}
