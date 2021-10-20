import {expect, test} from '@jest/globals';
import notEmpty from './not-empty';

test('empty string', () => {
	const input = '';

	const result = notEmpty(input);

	expect(result).toBe(false);
});

test('empty array', () => {
	const input = [];

	const result = notEmpty(input);

	expect(result).toBe(false);
});

test('empty object', () => {
	const input = {};

	const result = notEmpty(input);

	expect(result).toBe(false);
});

test('non-empty string', () => {
	const input = 'foo';

	const result = notEmpty(input);

	expect(result).toBe(true);
});

test('non-empty array', () => {
	const input = ['foo'];

	const result = notEmpty(input);

	expect(result).toBe(true);
});

test('non-empty object', () => {
	const input = {foo: 'bar'};

	const result = notEmpty(input);

	expect(result).toBe(true);
});
