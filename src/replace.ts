const replace = (pattern: RegExp | string, replacement: string): (input: string) => string => {
	const apply = (input: string): string => input.replace(pattern, replacement);

	return apply;
};

export default replace;
