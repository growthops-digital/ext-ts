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

### `isPopulated: (input: any) => boolean`

Determines whether the supplied input has been populated (not `null`, `undefined`, `[]`, `''`, or `{}`).

### `notPopulated: (input: any) => boolean`

Determines whether the supplied input has not been populated (is `null`, `undefined`, `[]`, `''`, or `{}`).

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

### `useOnScreen: <T extends Element>(options?: IntersectionObserverInit) => {ref, isVisible, isDirty}`

Creates an IntersectionObserver attached to the associated `ref` toggling `isVisible` when the object comes into view. The `isDirty` will be set to `true` once the object becomes visible and then remain `true` thereafter — useful for once-off events (scroll into view animations for instance).

**Example**
```js
import {useOnScreen} from '@growthops/ext-ts';

const Example = () => {
	const {ref, isVisible} = useOnScreen<HTMLDivElement>({threshold: 0.5});

	return (
		<div ref={ref} className={isVisible ? 'bg-red-500' : 'bg-white'}>
			I turn red when 50% or more of me is visible in the viewport.
		</div>
	);
};
```
