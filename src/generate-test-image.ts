import {aspectRatioFractions} from './aspect-ratios';
import type {AspectRatio} from './aspect-ratios';

const generateTestImage = (width: number, aspectRatio: AspectRatio, picsumId?: number): string => {
	const height = Math.floor(width * (1 / aspectRatioFractions[aspectRatio]));

	return `https://picsum.photos/${picsumId === undefined ? '' : `id/${picsumId}/`}${width}/${height}`;
};

export default generateTestImage;
