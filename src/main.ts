

/**
 * Js doc
 * ```ts
 * import { obj } from './main.ts';
 * import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
 * Deno.test('obj must have a', () => {
 *  assertEquals(obj.a, 1);
 * })
 * ```
 */


export const obj = { a: 1, b: 2 };
console.log("This is main script!", obj);
