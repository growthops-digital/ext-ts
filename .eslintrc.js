/*
	eslint-disable
	@typescript-eslint/naming-convention,
	unicorn/prefer-module
*/
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: '@growthops/eslint-config',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: '<root>/tsconfig.json',
			},
		},
	},
	ignorePatterns: [
		'/dist',
		'/coverage',
	],
};
