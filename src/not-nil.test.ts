import notNil from './not-nil';

test('string is not nil', () => {
	const input = 'foo';

	const result = notNil(input);

	expect(result).toBe(true);
});

test('number is not nil', () => {
	const input = 5;

	const result = notNil(input);

	expect(result).toBe(true);
});

test('null is nil', () => {
	const input = null;

	const result = notNil(input);

	expect(result).toBe(false);
});

test('undefined is nil', () => {
	const input = undefined;

	const result = notNil(input);

	expect(result).toBe(false);
});
