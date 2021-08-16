import {isArray, isString, isObject} from 'remeda';

type Emptiable = string | Record<any, any> | any[];

// eslint-disable-next-line @typescript-eslint/ban-types
const isEmpty = <T>(input: T): input is Extract<T, '' | [] | {}> => {
	if (isString(input)) {
		return input === '';
	}

	if (isArray(input)) {
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
