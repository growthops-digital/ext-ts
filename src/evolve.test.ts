import {expect, test} from '@jest/globals';
import evolve from './evolve';

type Data = {
	foo: number;
	bar: boolean;
};

test('it evolves the supplied object using concrete values', () => {
	const input: Data = {
		foo: 1,
		bar: false,
	};

	const result = evolve<Data>({
		foo: 2,
	})(input);

	expect(result).toMatchObject({
		foo: 2,
	});
});

test('it evolves the supplied object using concrete values — curried', () => {
	const input: Data = {
		foo: 1,
		bar: false,
	};

	const curriedEvolve = evolve<Data>({
		foo: 2,
	});

	const result = curriedEvolve(input);

	expect(result).toMatchObject({
		foo: 2,
	});
});

test('it evolves the supplied object using functions', () => {
	const input: Data = {
		foo: 1,
		bar: false,
	};

	const result = evolve<Data>({
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		foo: i => i + 1,
	})(input);

	expect(result).toMatchObject({
		foo: 2,
	});
});

test('it evolves the supplied object using functions — curried', () => {
	const input: Data = {
		foo: 1,
		bar: false,
	};

	const curriedEvolve = evolve<Data>({
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		foo: i => i + 1,
	});

	const result = curriedEvolve(input);

	expect(result).toMatchObject({
		foo: 2,
	});
});
