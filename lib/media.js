import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
	const imageUrl = media?.data?.attributes?.url?.startsWith('/')
		? getStrapiURL(media?.data?.attributes?.url)
		: media?.data?.attributes?.url;
	return imageUrl;
}
