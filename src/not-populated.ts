import {isNil} from 'remeda';
import isEmpty from './is-empty';

const notPopulated = (input: any) => isNil(input) || isEmpty(input);

export default notPopulated;
