# GrowthOps Ext TypeScript

[![codecov](https://codecov.io/gh/growthops-digital/ext-ts/branch/main/graph/badge.svg?token=vtv61Ll4j1)](https://codecov.io/gh/growthops-digital/ext-ts)

A collection of useful TypeScript-ready FP and misc utilities.

## Functions

### `trim: (input: string) => string`

Will trim the leading and trailing whitespace from the supplied string.

### `join: (glue: string) => (input: string[]) => string`

Used to build a function that will join the supplied array of strings together using the glue string. Functionaly identical to `Array.prototype.join()`.

### `replace: (pattern: string | RegExp, replacement: string) => (input: string) => string`

Used to build a function that will replace the supplied `pattern` with the `replacement` string. Functionally identical to `String.prototype.replace()`.

### `isEmpty: (input: string | Record<any, any> | any[]) => boolean`

Determines whether the suppied string, object or array is empty, eg. `''`, `[]`, or `{}` respectively.

### `notEmpty: (input: string | Record<any, any> | any[]) => boolean`

Complement of `isEmpty`.

### `1. notEquals: (a: any, b: any) => boolean`
### `2. notEquals: (a: any) => (b: any) => boolean`

Determines whether the two supplied objects are not equal. Doesn't handle cyclical data structures.

### `notNil: (input: any) => boolean`

Determines whether the supplied input is not `null` or `undefined`.

### `collapse: (input: string | string[]) => string`

Takes a string or an array of strings consisting of newlines, tabs, and/or multiple spaces and returns a single collapsed string with only one space between each "word".

**Example 1**
```js
import {collapse} from '@growthops/ext-ts';

collapse(`
	foo
		bar

	     baz
`);

// Returns: 'foo bar baz'
```

**Example 2**
```js
import {collapse} from '@growthops/ext-ts';

collapse([
	'foo',
	`
		bar
		baz
	`,
]);

// Returns: 'foo bar baz'
```
