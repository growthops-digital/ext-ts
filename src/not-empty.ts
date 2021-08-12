import isEmpty from './is-empty';
import type {Emptiable} from './is-empty';

const notEmpty = (input: Emptiable) => !isEmpty(input);

export default notEmpty;
