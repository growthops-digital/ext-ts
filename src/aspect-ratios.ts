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

const aspectRatios: Record<AspectRatio, number> = {
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

export default aspectRatios;

export type {
	AspectRatio,
};
