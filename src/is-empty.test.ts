import isEmpty from './is-empty';

test('empty string', () => {
	const input = '';

	const result = isEmpty(input);

	expect(result).toBe(true);
});

test('empty array', () => {
	const input = [];

	const result = isEmpty(input);

	expect(result).toBe(true);
});

test('empty object', () => {
	const input = {};

	const result = isEmpty(input);

	expect(result).toBe(true);
});

test('non-empty string', () => {
	const input = 'foo';

	const result = isEmpty(input);

	expect(result).toBe(false);
});

test('non-empty array', () => {
	const input = ['foo'];

	const result = isEmpty(input);

	expect(result).toBe(false);
});

test('non-empty object', () => {
	const input = {foo: 'bar'};

	const result = isEmpty(input);

	expect(result).toBe(false);
});
