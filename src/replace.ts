const replace = (pattern: string | RegExp, replacement: string) => {
	const apply = (input: string): string => input.replace(pattern, replacement);

	return apply;
};

export default replace;
