import {useState, useRef, useEffect} from 'react';

const useOnScreen = <T extends Element>(options?: IntersectionObserverInit) => {
	const ref = useRef<T>(null);
	const [state, setState] = useState({
		isVisible: false,
		isDirty: false,
	});

	useEffect(() => {
		if (ref.current === null) {
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			setState(current => ({
				isVisible: entry.isIntersecting,
				isDirty: current.isDirty || entry.isIntersecting,
			}));
		}, options);

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps

	return {ref, isVisible: state.isVisible, isDirty: state.isDirty};
};

export default useOnScreen;
