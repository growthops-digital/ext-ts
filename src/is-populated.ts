import notEmpty from './not-empty';
import notNil from './not-nil';
import type {Emptiable} from './is-empty';

type NotNull<T> = Exclude<T, null | undefined>;

const isPopulated = <T extends Emptiable>(input?: T | null): input is NotNull<T> => notNil(input) && notEmpty(input);

export default isPopulated;
