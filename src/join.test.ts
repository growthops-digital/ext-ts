/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

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
