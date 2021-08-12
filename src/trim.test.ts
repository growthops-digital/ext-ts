/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

import trim from './trim';

test('trims the preceeding and trailing whitespace off the provided string', () => {
	const input = '    foo bar  ';

	const result = trim(input);

	expect(result).toBe('foo bar');
});
