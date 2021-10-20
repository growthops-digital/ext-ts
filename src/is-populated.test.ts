import isPopulated from './is-populated';

test('null', () => {
	const input = null;

	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('undefined', () => {
	const input = undefined;

	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('empty string', () => {
	const input = '';

	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('populated string', () => {
	const input = 'foo';

	const result = isPopulated(input);

	expect(result).toBe(true);
});

test('empty array', () => {
	const input = [];

	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('populated array', () => {
	const input = [0, 1, 2];

	const result = isPopulated(input);

	expect(result).toBe(true);
});

test('empty object', () => {
	const input = {};

	const result = isPopulated(input);

	expect(result).toBe(false);
});

test('populated object', () => {
	const input = {foo: 'bar'};

	const result = isPopulated(input);

	expect(result).toBe(true);
});