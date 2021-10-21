const generateTestImage = (width: number, aspectRatio: number, picsumId?: number) => {
	const height = Math.floor(width * (1 / aspectRatio));

	return `https://picsum.photos/${picsumId ? `id/${picsumId}/` : ''}${width}/${height}`;
};

export default generateTestImage;
