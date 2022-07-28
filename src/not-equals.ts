import {purry, equals} from 'remeda';

// Support data-first and data-last and per Remeda conventions.
type NotEqualsFunction = {
	(a: unknown, b: unknown): boolean;
	(a: unknown): (b: unknown) => boolean;
};

const _notEquals = (a: unknown, b: unknown): boolean => !equals(a, b);

const notEquals = (...rest: unknown[]): NotEqualsFunction => purry(_notEquals, rest) as NotEqualsFunction;

export default notEquals;
