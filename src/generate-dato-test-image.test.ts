import {expect, test} from '@jest/globals';
import generateDatoTestImage from './generate-dato-test-image';
import {aspectRatioFractions} from './aspect-ratios';

test('square aspect ratio', () => {
	const result = generateDatoTestImage(500, 'square');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/500',
		aspectRatio: aspectRatioFractions.square,
		width: 500,
	});
});

test('specific Picsum ID', () => {
	const result = generateDatoTestImage(500, 'square', 237);

	expect(result).toEqual({
		src: 'https://picsum.photos/id/237/500/500',
		aspectRatio: aspectRatioFractions.square,
		width: 500,
	});
});

test('16:9 aspect ratio', () => {
	const result = generateDatoTestImage(500, 'hdtv');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/281',
		aspectRatio: aspectRatioFractions.hdtv,
		width: 500,
	});
});

test('4:3 aspect ratio', () => {
	const result = generateDatoTestImage(500, 'sdtv');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/375',
		aspectRatio: aspectRatioFractions.sdtv,
		width: 500,
	});
});
