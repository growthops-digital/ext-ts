const config = {
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'^@app(.*)$': '<rootDir>/$1',
	},
	modulePathIgnorePatterns: [
		'<rootDir>/.next/',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
	],
};

module.exports = config;
