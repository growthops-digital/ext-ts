import {notEmpty, notNil} from '.';

const isPopulated = (input: any) => notNil(input) && notEmpty(input);

export default isPopulated;
