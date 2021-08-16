const config = {
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
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

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
