import {identity} from 'remeda';
import {expect, test} from '@jest/globals';
import {success, failure, isFailure, isSuccess, resultFromPromise} from './result';
import type {Success, Failure} from './result';

test('success function creates correct data structure', () => {
	const result = success({foo: 'bar'});

	const expected: Success<{foo: string}> = {
		type: 'success',
		data: {
			foo: 'bar',
		},
	};

	expect(isSuccess(result)).toBe(true);

	expect(result).toEqual(expected);
});

test('nil data failure function creates correct data structure', () => {
	const result = failure('foo');

	const expected: Failure = {
		type: 'failure',
		message: 'foo',
		data: null,
	};

	expect(isFailure(result)).toBe(true);

	expect(result).toEqual(expected);
});

test('non-nil data failure function creates correct data structure', () => {
	const result = failure('foo', 'error');

	const expected: Failure = {
		type: 'failure',
		message: 'foo',
		data: 'error',
	};

	expect(result).toEqual(expected);
});

test('converts successful promise into result', async () => {
	const responseData = {
		data: {
			foo: 'bar',
		},
	};

	type Response = typeof responseData;

	const promise = Promise.resolve<Response>(responseData);

	const formatter = (response: Response): {foo: string} => response.data;

	const result = await resultFromPromise(promise, formatter);

	const expected: Success<{foo: string}> = {
		type: 'success',
		data: {
			foo: 'bar',
		},
	};

	expect(isSuccess(result)).toBe(true);

	expect(result).toEqual(expected);
});

test('converts failed promise into result', async () => {
	const error = {
		data: 'error',
	};

	type Error = typeof error;

	const promise = Promise.reject<Error>(error);

	const errorHandler = (data: Error): {message: string; data: Error} => ({
		message: 'There was an error',
		data,
	});

	const result = await resultFromPromise(promise, identity, errorHandler);

	const expected: Failure = {
		type: 'failure',
		message: 'There was an error',
		data: error,
	};

	expect(isFailure(result)).toBe(true);

	expect(result).toEqual(expected);
});
