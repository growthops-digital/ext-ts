import {isNil} from 'remeda';
import isEmpty from './is-empty';
import type {Emptiable} from './is-empty';

const notPopulated = <T extends Emptiable>(input?: T | null): input is null | undefined => isNil(input) || isEmpty(input);

export default notPopulated;
