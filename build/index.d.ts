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
export declare const isIndexOf: <T>(idx: unknown | number, array: ArrayLike<T>) => boolean;
/**
 * Checks if a value is an array-like object.
 * @param {unknown} array - The value to check.
 * @returns {boolean} True if the value is array-like, false otherwise.
 * @example
 * isArray([1, 2, 3]); // true
 * isArray('not an array'); // false
 */
export declare const isArray: <T, A = ArrayLike<T>>(array: unknown) => array is A;
/**
 * Checks if a value is indexable (array-like).
 * @param {unknown} array - The value to check.
 * @returns {boolean} True if the value is indexable, false otherwise.
 * @example
 * isIndexable([1, 2, 3]); // true
 * isIndexable('not indexable'); // false
 */
export declare const isIndexable: <T, A = ArrayLike<T>>(array: unknown) => array is A;
/**
 * Throttles a function so that it can only be called once every specified delay.
 * @param {((...args: any[]) => void} fn - The function to throttle.
 * @param {number} delay - The delay in milliseconds.
 * @returns {((...args: any[]) => void} The throttled function.
 * @example
 * const throttledLog = throttle(() => console.log('Throttled!'), 1000);
 * window.addEventListener('resize', throttledLog);
 */
export declare const throttle: <T extends (...args: any[]) => void>(fn: T, delay: number) => (...args: Parameters<T>) => void;
/**
 * Debounces a function so that it can only be called after a specified delay since the last call.
 * @param {(...args: any[]) => void} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {(...args: any[]) => void} The debounced function.
 * @example
 * const debouncedLog = debounce((a: string) => console.log(`Debounced: ${a}`), 1000);
 * window.addEventListener('scroll', (evt: Event) => debouncedLog(evt.type));
 */
export declare const debounce: <T extends (...args: any[]) => void>(fn: T, delay: number) => (...args: Parameters<T>) => void;
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
export declare const sleep: (ms: number) => Promise<unknown>;
/**
 * Validates if a string is a valid email address.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 */
export declare const isEmail: (email: string) => boolean;
/**
 * a regular expression for validating email addresses.
 * @example
 * emailRegex.test('test@example.com'); // true
 */
export declare const emailRegex: RegExp;
/**
 * Validates if a string is a valid phone number.
 * @param {string} phone - The phone string to validate.
 * @returns {boolean} True if the phone is valid, false otherwise.
 * @example
 * isPhone('+1234567890'); // true
 * isPhone('invalid-phone'); // false
 */
export declare const isPhone: (phone: string) => boolean;
/**
 * Removes an item from an array.
 * @param {T} item - The item to remove.
 * @param {T[]} array - The array to remove the item from.
 * @example
 * const array = [1, 2, 3];
 * remove(2, array);
 * console.log(array); // [1, 3]
 */
export declare const remove: <T>(item: T, array: T[]) => void;
/**
 * Removes an item using the index from an array.
 * @param {T} item - The index of item to remove.
 * @param {T[]} array - The array to remove the item from.
 * @example
 * const array = [1, 2, 3];
 * removeAtIndex(1, array);
 * console.log(array); // [1, 3]
 */
export declare const removeAtIndex: <T>(array: T[], index: number) => T[];
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
export declare const merge: <T>(a: T[], b: T[]) => T[];
/**
 * Removes duplicate items from an array.
 * @param {T[]} array - The array to make unique.
 * @returns {T[]} A new array with unique items.
 * @example
 * const array = [1, 1, 2, 2, 3];
 * const uniqueArray = unique(array);
 * console.log(uniqueArray); // [1, 2, 3]
 */
export declare const unique: <T>(array: T[]) => T[];
/**
 * Generates a random number between min and max.
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} A random number between min and max.
 * @example
 * const randomNumber = random(1, 10);
 * console.log(randomNumber); // e.g., 7
 */
export declare const random: (min: number, max: number) => number;
/**
 * Checks if a value is a string.
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 * @example
 * isString('hello'); // true
 * isString(123); // false
 */
export declare const isString: (value: unknown) => value is string;
/**
 * Checks if a value is a number.
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 * @example
 * isNumber(123); // true
 * isNumber('123'); // false
 */
export declare const isNumber: (value: unknown) => value is number;
/**
 * Shuffles an array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @example
 * const array = [1, 2, 3, 4];
 * const shuffled = shuffle(array);
 * console.log(shuffled); // e.g., [3, 1, 4, 2]
 */
export declare const shuffle: <T>(array: T[]) => T[];
/**
 * Deep clones an object or array.
 * @param {T} obj - The object or array to clone.
 * @returns {T} A deep clone of the object or array.
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * console.log(clone); // { a: 1, b: { c: 2 } }
 */
export declare const deepClone: <T>(obj: T) => T;
/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 * @example
 * toTitleCase('hello world'); // 'Hello World'
 */
export declare const toTitleCase: (str: string) => string;
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
export declare const groupBy: <T>(array: T[], key: keyof T) => Record<string, T[]>;
/**
 * Checks if an object is empty.
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 * @example
 * isEmptyObject({}); // true
 * isEmptyObject({ a: 1 }); // false
 */
export declare const isEmptyObject: (obj: object) => boolean;
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
export declare const formatCurrency: (value: number, currency?: string, locales?: string) => string;
/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 * @example
 * capitalize('hello'); // 'Hello'
 */
export declare const capitalize: (str: string) => string;
/**
 * Compares two arrays for equality.
 * @param {T[]} a - The first array.
 * @param {T[]} b - The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 * @example
 * arraysEqual([1, 2, 3], [1, 2, 3]); // true
 * arraysEqual([1, 2, 3], [1, 2, 4]); // false
 */
export declare const arraysEqual: <T>(a: T[], b: T[]) => boolean;
/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the string.
 * @returns {string} The random string.
 * @example
 * const randomStr = randomString(5);
 * console.log(randomStr); // e.g., 'abcde'
 */
export declare const randomString: (length: number) => string;
/**
 * Parses a query string into an object.
 * @param {string} queryString - The query string to parse.
 * @returns {Record<string, string>} The parsed object.
 * @example
 * const obj = parseQueryString('?a=1&b=2');
 * console.log(obj); // { a: '1', b: '2' }
 */
export declare const parseQueryString: (queryString: string) => Record<string, string>;
//# sourceMappingURL=index.d.ts.map