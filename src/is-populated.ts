import notEmpty from './not-empty';
import notNil from './not-nil';

const isPopulated = (input: any) => notNil(input) && notEmpty(input);

export default isPopulated;
