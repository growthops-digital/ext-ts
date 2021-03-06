import {expect, test} from '@jest/globals';
import collapse from './collapse';

test('collapses multi-line string', () => {
	const input = `
		foo
		bar
	`;

	const result = collapse(input);

	expect(result).toBe('foo bar');
});

test('collapses array of strings', () => {
	const input = [
		'foo',
		'bar',
	];

	const result = collapse(input);

	expect(result).toBe('foo bar');
});
