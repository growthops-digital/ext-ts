import {expect, test} from '@jest/globals';
import repeat from './repeat';

test('check repeat works for a single iteration', () => {
	const REPEATS = 1;

	const callable = jest.fn();

	repeat(() => {
		callable();
	}, REPEATS);

	expect(callable).toBeCalledTimes(REPEATS);
});

test('check repeat works for multiple iterations', () => {
	const REPEATS = 5;

	const callable = jest.fn();

	repeat(() => {
		callable();
	}, REPEATS);

	expect(callable).toBeCalledTimes(REPEATS);
});
