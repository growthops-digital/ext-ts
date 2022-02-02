import {purry, equals} from 'remeda';

// Support data-first and data-last and per Remeda conventions.
type NotEqualsFunc = {
	(a: unknown, b: unknown): boolean;
	(a: unknown): (b: unknown) => boolean;
};

const _notEquals = (a: unknown, b: unknown): boolean => !equals(a, b);

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const notEquals = (...args: unknown[]): NotEqualsFunc => purry(_notEquals, args);

export default notEquals;
