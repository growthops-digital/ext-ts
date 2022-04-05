import notNil from './not-nil';

const attempt = <T, K extends unknown[], O>(
	fn: (input: T, ...rest: K) => O, input: T | null | undefined, ...rest: K
): O | null => {
	if (notNil(input)) {
		return fn(input, ...rest);
	}

	return null;
};

export default attempt;
