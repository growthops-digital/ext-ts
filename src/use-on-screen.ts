import {useState, useRef, useEffect} from 'react';

type UseOnScreenResult<T> = {
	ref: React.RefObject<T>;
	isVisible: boolean;
	isDirty: boolean;
};

const useOnScreen = <T extends Element>(options?: IntersectionObserverInit): UseOnScreenResult<T> => {
	const reference = useRef<T>(null);
	const [state, setState] = useState({
		isVisible: false,
		isDirty: false,
	});

	useEffect(() => {
		if (reference.current === null) {
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			setState(current => ({
				isVisible: entry.isIntersecting,
				isDirty: current.isDirty || entry.isIntersecting,
			}));
		}, options);

		observer.observe(reference.current);

		return () => {
			observer.disconnect();
		};
	}, [reference.current]);

	return {ref: reference, isVisible: state.isVisible, isDirty: state.isDirty};
};

export default useOnScreen;
