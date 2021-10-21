import {expect, test} from '@jest/globals';
import generateTestImage from './generate-test-image';
import aspectRatios from './aspect-ratios';

test('square aspect ratio', () => {
	const result = generateTestImage(500, aspectRatios.square);

	expect(result).toBe('https://picsum.photos/500/500');
});

test('specific Picsum ID', () => {
	const result = generateTestImage(500, aspectRatios.square, 237);

	expect(result).toBe('https://picsum.photos/id/237/500/500');
});

test('16:9 aspect ratio', () => {
	const result = generateTestImage(500, aspectRatios.hdtv);

	expect(result).toBe('https://picsum.photos/500/281');
});

test('4:3 aspect ratio', () => {
	const result = generateTestImage(500, aspectRatios.sdtv);

	expect(result).toBe('https://picsum.photos/500/375');
});
