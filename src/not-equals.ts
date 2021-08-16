import {purry, equals} from 'remeda';

// Support data-first and data-last and per Remeda conventions.
type NotEqualsFunc = {
	(a: any, b: any): boolean;
	(a: any): (b: any) => boolean;
};

const _notEquals = (a: any, b: any) => !equals(a, b);

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const notEquals = (...args: any[]): NotEqualsFunc => purry(_notEquals, args);

export default notEquals;
