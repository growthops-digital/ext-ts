import notNil from './not-nil';

const attempt = <T, K extends unknown[], O>(
	callable: (input: T, ...rest: K) => O, input: T | null | undefined, ...rest: K
): O | null => {
	if (notNil(input)) {
		return callable(input, ...rest);
	}

	// eslint-disable-next-line unicorn/no-null
	return null;
};

export default attempt;
