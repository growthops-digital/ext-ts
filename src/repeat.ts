const repeat = (fn: () => void, times: number): void => {
	[...Array<number>(times)].forEach(_ => {
		fn();
	});
};

export default repeat;
