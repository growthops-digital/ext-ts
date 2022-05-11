type NaturalSelection<T> = {
	[K in keyof T]: T[K] | ((value: T[K]) => T[K]) | undefined;
};

const evolve = <T>(partial: NaturalSelection<T>) => (data: T): T => {
	let evolved = data;

	for (const key in partial) {
		if (Object.prototype.hasOwnProperty.call(partial, key) === true) {
			const value = partial[key];

			if (typeof value === 'function') {
				evolved = {
					...evolved,
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					[key]: value(evolved[key]),
				};
			} else {
				evolved = {...evolved, [key]: value};
			}
		}
	}

	return evolved;
};

export default evolve;
