# GrowthOps Ext TypeScript

[![codecov](https://codecov.io/gh/growthops-digital/ext-ts/branch/main/graph/badge.svg?token=vtv61Ll4j1)](https://codecov.io/gh/growthops-digital/ext-ts)

## Utility Functions

### `trim: (input: string) => string`

Will trim the leading and trailing whitespace from the supplied string.

### `join: (glue: string) => (input: string[]) => string`

Used to build a function that will join the supplied array of strings together using the glue string. Functionaly identical to `Array.prototype.join()`.

### `replace: (pattern: string | RegExp, replacement: string) => (input: string) => string`

Used to build a function that will replace the supplied `pattern` with the `replacement` string. Functionally identical to `String.prototype.replace()`.

### `isEmpty: <T extends string | any[] | Record<string, unknown>>(input: T) => boolean`

Determines whether the suppied string, array, or record is empty, eg. `''`, `[]`, or `{}` respectively.

### `notEmpty: <T extends string | any[] | Record<string, unknown>>(input: T) => boolean`

Complement of `isEmpty`.

### `1. notEquals: (a: any, b: any) => boolean`
### `2. notEquals: (a: any) => (b: any) => boolean`

Determines whether the two supplied objects are not equal. Doesn't handle cyclical data structures.

### `notNil: (input: any) => boolean`

Determines whether the supplied input is not `null` or `undefined`.

### `attempt: <T, K>(fn: (T: any) => K, input: T) => K | null`

Attempt to executed the supplied function with input as its first and only parameter, assuming input is not nil.

### `keyEquals: (key: string, value: string, input: any) => boolean`

Determines whether the input is a record type and it has a key with the supplied value.

### `isPopulated: <T extends string | any[] | Record<string, unknown>>(input: T) => boolean`

Determines whether the supplied input has been populated (not `null`, `undefined`, `''`, `[]`, or `{}`).

### `notPopulated: <T extends string | any[] | Record<string, unknown>>(input: T) => boolean`

Complement of `isPopulated`.

### `generateTestImage: (width: number, aspectRatio: number, picsumId?: number) => string`

Generates a [Picsum](https://picsum.photos/) image URL based on the provided width and aspect ratio. Optionally supports specific Picsum image ID's.

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

## Aspect Ratios

<img src="https://user-images.githubusercontent.com/56568247/138200402-ed236b97-f1e6-45ab-bb24-7480585f4801.jpg" width="600"/>

### `aspectRatioFractions: Record<AspectRatio, number>`

A lookup table of common aspect ratios in their fractional form (eg. 1.5 for Film).

### `aspectRatioNotations: Record<AspectRatio, string>`

A lookup table of common aspect ratios in their notational string form (eg. '3:2' for Film).
