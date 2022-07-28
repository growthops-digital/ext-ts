import {expect, test} from '@jest/globals';
import notPopulated from './not-populated';

test('null', () => {
	// eslint-disable-next-line unicorn/no-null
	const input = null;

	const result = notPopulated(input);

	expect(result).toBe(true);
});

test('undefined', () => {
	const input = undefined;

	const result = notPopulated(input);

	expect(result).toBe(true);
});

test('empty string', () => {
	const input = '';

	const result = notPopulated(input);

	expect(result).toBe(true);
});

test('populated string', () => {
	const input = 'foo';

	const result = notPopulated(input);

	expect(result).toBe(false);
});

test('empty array', () => {
	const input = [];

	const result = notPopulated(input);

	expect(result).toBe(true);
});

test('populated array', () => {
	const input = [0, 1, 2];

	const result = notPopulated(input);

	expect(result).toBe(false);
});

test('empty object', () => {
	const input = {};

	const result = notPopulated(input);

	expect(result).toBe(true);
});

test('populated object', () => {
	const input = {foo: 'bar'};

	const result = notPopulated(input);

	expect(result).toBe(false);
});
