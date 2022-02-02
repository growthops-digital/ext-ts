import {isObject} from 'remeda';

const keyEquals = (key: string, value: string, input: unknown): boolean => {
	if (isObject(input)) {
		return input[key] !== undefined ? input[key] === value : false;
	}

	return false;
};

export default keyEquals;
