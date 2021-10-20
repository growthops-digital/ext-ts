import {isArray, isString, isObject} from 'remeda';

const isEmpty = <T extends string | any[] | Record<string, unknown>>(input: T): boolean => {
	if (isArray(input) || isString(input)) {
		return input.length === 0;
	}

	if (isObject(input)) {
		return Object.keys(input).length === 0;
	}

	return false;
};

export default isEmpty;
