import {expect, test} from '@jest/globals';
import repeat from './repeat';

test('check repeat works for a single iteration', () => {
	const REPEATS = 1;

	const fn = jest.fn();

	repeat(() => {
		fn();
	}, REPEATS);

	expect(fn).toBeCalledTimes(REPEATS);
});

test('check repeat works for multiple iterations', () => {
	const REPEATS = 5;

	const fn = jest.fn();

	repeat(() => {
		fn();
	}, REPEATS);

	expect(fn).toBeCalledTimes(REPEATS);
});
