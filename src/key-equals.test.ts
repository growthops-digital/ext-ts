import {expect, test} from '@jest/globals';
import keyEquals from './key-equals';

test('record contains key with value', () => {
	const input = {
		foo: 'bar',
	};

	const result = keyEquals('foo', 'bar', input);

	expect(result).toBe(true);
});

test('record does not contain key with value', () => {
	const input = {
		foo: 'bar',
	};

	const result = keyEquals('foo', 'baz', input);

	expect(result).toBe(false);
});

test('input is not record', () => {
	const input = 42;

	const result = keyEquals('foo', 'bar', input);

	expect(result).toBe(false);
});
