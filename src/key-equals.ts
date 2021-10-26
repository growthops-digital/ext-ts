import {isObject} from 'remeda';

const keyEquals = (key: string, value: string, input: any): boolean => {
	if (isObject(input)) {
		return input[key] ? input[key] === value : false;
	}

	return false;
};

export default keyEquals;
