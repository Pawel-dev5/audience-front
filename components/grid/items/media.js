import Link from 'next/link';
import { useRouter } from 'next/router';
import 'moment/locale/pl';
import { useTranslation } from 'next-i18next';

// COMMON
import { Button } from '../../common/items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import {
	StyledMediaCardContent,
	StyledMediaCard,
	StyledMediaCardImage,
	StyledCSCardTitle,
	StyledMediaCardDesc,
} from './Styles';

const Media = ({ children }) => {
	const router = useRouter();
	const { t } = useTranslation('common');

	const {
		attributes: { image, title, link, description },
	} = children;

	return (
		<Link href={link ?? '/media'} locale={router?.locale} passHref>
			<StyledMediaCard as="a" target="_blank">
				{image && (
					<StyledMediaCardImage>
						<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.name ?? ''} />
					</StyledMediaCardImage>
				)}

				<StyledMediaCardContent>
					<div>
						{title && <StyledCSCardTitle>{title}</StyledCSCardTitle>}
						{description && <StyledMediaCardDesc>{description}</StyledMediaCardDesc>}
					</div>

					<Button text={t('more')} link={link ?? '/media'} locale={router?.locale} target="_blank" />
				</StyledMediaCardContent>
			</StyledMediaCard>
		</Link>
	);
};

export default Media;
