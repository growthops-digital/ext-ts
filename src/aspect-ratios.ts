type AspectRatio =
	| 'cinemaFilm'
	| 'display'
	| 'film'
	| 'hdtv'
	| 'portrait'
	| 'sdtv'
	| 'smartphone'
	| 'square'
	| 'tall'
	| 'widescreen';

const aspectRatioFractions: Record<AspectRatio, number> = {
	cinemaFilm: 2 / 1,
	display: 5 / 4,
	film: 3 / 2,
	portrait: 3 / 4,
	tall: 2 / 3,
	hdtv: 16 / 9,
	sdtv: 4 / 3,
	smartphone: 9 / 16,
	square: 1,
	widescreen: 16 / 10,
};

const aspectRatioNotations: Record<AspectRatio, string> = {
	cinemaFilm: '2:1',
	display: '5:4',
	film: '3:2',
	portrait: '3:4',
	tall: '2:3',
	hdtv: '16:9',
	sdtv: '4:3',
	smartphone: '9:16',
	square: '1:1',
	widescreen: '16:10',
};

export {
	aspectRatioFractions,
	aspectRatioNotations,
};

export type {
	AspectRatio,
};
