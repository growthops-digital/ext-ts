import {isArray, isString, isObject} from 'remeda';

type Emptiable = Record<string, unknown> | unknown[] | string;

const LENGTH_ZERO = 0;

const isEmpty = <T extends Emptiable>(input: T): boolean => {
	if (isArray(input) || isString(input)) {
		return input.length === LENGTH_ZERO;
	}

	if (isObject(input)) {
		return Object.keys(input).length === LENGTH_ZERO;
	}

	return false;
};

export default isEmpty;

export type {
	Emptiable,
};
