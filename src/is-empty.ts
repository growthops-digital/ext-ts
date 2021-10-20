import {isArray, isString, isObject} from 'remeda';

type Emptiable = string | any[] | Record<string, unknown>;

const isEmpty = <T extends Emptiable>(input: T): boolean => {
	if (isArray(input) || isString(input)) {
		return input.length === 0;
	}

	if (isObject(input)) {
		return Object.keys(input).length === 0;
	}

	return false;
};

export default isEmpty;

export type {
	Emptiable,
};
