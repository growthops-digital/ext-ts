import notNil from './not-nil';

const attempt = <T, K extends unknown[], O>(
	callable: (input: T, ...rest: K) => O, input: T | null | undefined, ...rest: K
): O | undefined => {
	if (notNil(input)) {
		return callable(input, ...rest);
	}

	return undefined;
};

export default attempt;
