import {expect, test} from '@jest/globals';
import join from './join';

test('joins an array of strings with the provided seperator', () => {
	const input = [
		'foo',
		'bar',
	];

	const joiner = join('-');
	const result = joiner(input);

	expect(result).toBe('foo-bar');
});
