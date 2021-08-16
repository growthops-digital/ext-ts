import notEquals from './not-equals';

test('string does not equal number', () => {
	const inputA = 'foo';
	const inputB = 10;

	const result = notEquals(inputA, inputB);

	expect(result).toBe(true);
});

test('identical strings are equal', () => {
	const inputA = 'foo';
	const inputB = 'foo';

	const result = notEquals(inputA, inputB);

	expect(result).toBe(false);
});

test('ensure data-last operation is supported', () => {
	const inputA = 'foo';
	const inputB = 'foo';

	const equalsFoo = notEquals(inputA);
	const result = equalsFoo(inputB);

	expect(result).toBe(false);
});
