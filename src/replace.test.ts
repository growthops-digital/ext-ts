import {expect, test} from '@jest/globals';
import replace from './replace';

test('replaces all matching patterns in the supplied string', () => {
	const input = 'foo bar foo';

	const replacer = replace(/bar/g, 'foo');
	const result = replacer(input);

	expect(result).toBe('foo foo foo');
});
