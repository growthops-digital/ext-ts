import {expect, test} from '@jest/globals';
import generateTestImage from './generate-test-image';

const TEST_IMAGE_WIDTH = 500;
const TEST_IMAGE_ID = 237;

test('square aspect ratio', () => {
	const result = generateTestImage(TEST_IMAGE_WIDTH, 'square');

	expect(result).toBe('https://picsum.photos/500/500');
});

test('specific Picsum ID', () => {
	const result = generateTestImage(TEST_IMAGE_WIDTH, 'square', TEST_IMAGE_ID);

	expect(result).toBe('https://picsum.photos/id/237/500/500');
});

test('16:9 aspect ratio', () => {
	const result = generateTestImage(TEST_IMAGE_WIDTH, 'hdtv');

	expect(result).toBe('https://picsum.photos/500/281');
});

test('4:3 aspect ratio', () => {
	const result = generateTestImage(TEST_IMAGE_WIDTH, 'sdtv');

	expect(result).toBe('https://picsum.photos/500/375');
});
