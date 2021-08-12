type Emptiable = string | Record<any, any> | any[];

const isEmpty = (input: Emptiable): boolean => {
	if (typeof input === 'string') {
		return input === '';
	}

	if (Array.isArray(input)) {
		return input.length === 0;
	}

	return Object.keys(input).length === 0;
};

export default isEmpty;

export type {
	Emptiable,
};
