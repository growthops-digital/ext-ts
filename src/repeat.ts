const repeat = (callable: () => void, times: number): void => {
	for (const _ of Array.from({length: times})) {
		callable();
	}
};

export default repeat;
