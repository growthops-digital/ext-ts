import {ResponsiveImageType} from 'react-datocms';
import generateTestImage from './generate-test-image';
import {aspectRatioFractions} from './aspect-ratios';
import type {AspectRatio} from './aspect-ratios';

const generateDatoTestImage = (width: number, aspectRatio: AspectRatio, picsumId?: number): ResponsiveImageType => ({
	src: generateTestImage(width, aspectRatio, picsumId),
	aspectRatio: aspectRatioFractions[aspectRatio],
	width,
});

export default generateDatoTestImage;
