import {createPipe} from 'remeda';
import replace from './replace';
import trim from './trim';
import join from './join';

type Collapsible = string[] | string;

const formatString = createPipe(
	replace(/[\r\n\t]+/g, ' '),
	replace(/  +/g, ' '),
	trim,
);

const formatArray = createPipe(
	join(' '),
	formatString,
);

const collapse = (input: Collapsible): string => {
	if (Array.isArray(input)) {
		return formatArray(input);
	}

	return formatString(input);
};

export default collapse;

export type {
	Collapsible,
};
