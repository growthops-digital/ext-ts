import {expect, test} from '@jest/globals';
import generateDatoTestImage from './generate-dato-test-image';
import {aspectRatioFractions} from './aspect-ratios';

const TEST_IMAGE_WIDTH = 500;
const TEST_IMAGE_ID = 237;

test('square aspect ratio', () => {
	const result = generateDatoTestImage(TEST_IMAGE_WIDTH, 'square');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/500',
		aspectRatio: aspectRatioFractions.square,
		width: TEST_IMAGE_WIDTH,
	});
});

test('specific Picsum ID', () => {
	const result = generateDatoTestImage(TEST_IMAGE_WIDTH, 'square', TEST_IMAGE_ID);

	expect(result).toEqual({
		src: 'https://picsum.photos/id/237/500/500',
		aspectRatio: aspectRatioFractions.square,
		width: TEST_IMAGE_WIDTH,
	});
});

test('16:9 aspect ratio', () => {
	const result = generateDatoTestImage(TEST_IMAGE_WIDTH, 'hdtv');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/281',
		aspectRatio: aspectRatioFractions.hdtv,
		width: TEST_IMAGE_WIDTH,
	});
});

test('4:3 aspect ratio', () => {
	const result = generateDatoTestImage(TEST_IMAGE_WIDTH, 'sdtv');

	expect(result).toEqual({
		src: 'https://picsum.photos/500/375',
		aspectRatio: aspectRatioFractions.sdtv,
		width: TEST_IMAGE_WIDTH,
	});
});
