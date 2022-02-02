/* eslint-disable @typescript-eslint/no-magic-numbers */
import {expect, test} from '@jest/globals';
import attempt from './attempt';

const operationA = (a: number): number => a + 1;
const operationB = (a: number, b: number): number => a + b;
const operationC = (a: number, b: number, c: number): number => a + b + c;

test('attempt operation on defined input', () => {
	const input = 0;
	const result = attempt(operationA, input);

	expect(result).not.toBeNull();
});

test('attempt operation on null input', () => {
	const input = null;
	const result = attempt(operationA, input);

	expect(result).toBeNull();
});

test('attempt operation on undefined input', () => {
	const input = undefined;
	const result = attempt(operationA, input);

	expect(result).toBeNull();
});

test('attempt operation on defined input with one additional function parameter', () => {
	const input = 5;
	const result = attempt(operationB, input, 1);

	expect(result).toBe(6);
});

test('attempt operation on defined input with two additional function parameters', () => {
	const input = 5;
	const result = attempt(operationC, input, 1, 2);

	expect(result).toBe(8);
});
