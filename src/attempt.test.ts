import {expect, test} from '@jest/globals';
import attempt from './attempt';

const operation = (a: number) => a + 1;

test('attempt operation on defined input', () => {
	const input = 0;
	const result = attempt(operation, input);

	expect(result).not.toBeNull();
});

test('attempt operation on null input', () => {
	const input = null;
	const result = attempt(operation, input);

	expect(result).toBeNull();
});

test('attempt operation on undefined input', () => {
	const input = undefined;
	const result = attempt(operation, input);

	expect(result).toBeNull();
});
