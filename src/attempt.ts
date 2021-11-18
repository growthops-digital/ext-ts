import notNil from './not-nil';

const attempt = <T, K extends any[], O>(fn: (input: T, ...rest: K) => O, input: T | undefined | null, ...rest: K) => {
	if (notNil(input)) {
		return fn(input, ...rest);
	}

	return null;
};

export default attempt;
