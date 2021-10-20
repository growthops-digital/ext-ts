import {expect, test} from '@jest/globals';
import trim from './trim';

test('trims the preceeding and trailing whitespace off the provided string', () => {
	const input = '    foo bar  ';

	const result = trim(input);

	expect(result).toBe('foo bar');
});
