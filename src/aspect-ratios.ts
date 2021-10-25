type AspectRatio =
	| 'cinemaFilm'
	| 'cinemaScope'
	| 'display'
	| 'film'
	| 'hdtv'
	| 'sdtv'
	| 'smartphone'
	| 'square'
	| 'widescreen';

const aspectRatioFractions: Record<AspectRatio, number> = {
	cinemaFilm: (1.85 / 1),
	cinemaScope: (2.35 / 1),
	display: (5 / 4),
	film: (3 / 2),
	hdtv: (16 / 9),
	sdtv: (4 / 3),
	smartphone: (9 / 16),
	square: 1,
	widescreen: (16 / 10),
};

const aspectRatioNotations: Record<AspectRatio, string> = {
	cinemaFilm: '1.85:1',
	cinemaScope: '2.35:1',
	display: '5:4',
	film: '3:2',
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
