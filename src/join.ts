const join = (glue: string) => {
	const apply = (input: string[]): string => input.join(glue);

	return apply;
};

export default join;
