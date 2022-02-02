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

module.exports = config;
