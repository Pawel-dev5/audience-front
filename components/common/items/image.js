import NextImage from 'next/image';
import { getStrapiMedia } from '../../../lib/media';

const Image = ({ image }) => {
	if (image?.data?.attributes) {
		const { alternativeText, width, height } = image?.data?.attributes;

		return (
			<NextImage
				layout="responsive"
				width={width ?? '100%'}
				height={height ?? '100%'}
				objectFit="contain"
				src={getStrapiMedia(image)}
				alt={alternativeText || ''}
			/>
		);
	}
	return null;
};

export default Image;
