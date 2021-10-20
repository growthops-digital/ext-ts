import {isNil} from 'remeda';
import {isEmpty} from '.';

const notPopulated = (input: any) => isNil(input) || isEmpty(input);

export default notPopulated;
