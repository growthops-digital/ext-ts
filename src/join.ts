const join = (glue: string): (input: string[]) => string => {
	const apply = (input: string[]): string => input.join(glue);

	return apply;
};

export default join;
