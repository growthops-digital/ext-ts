import notNil from './not-nil';

const attempt = <T, K>(fn: (T: any) => K, input: T) => {
	if (notNil(input)) {
		return fn(input);
	}

	return null;
};

export default attempt;
