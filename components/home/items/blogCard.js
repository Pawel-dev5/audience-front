import { useTranslation } from 'next-i18next';

// COMMON
import { Button } from '../../common/items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledCard, StyledCardTitle } from './Styles';

const BlogCard = ({ title, image, slug }) => {
	const { t } = useTranslation('common');

	return (
		<StyledCard>
			{image && <img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? title} />}
			{title && <StyledCardTitle>{title}</StyledCardTitle>}
			{slug && <Button text={t('more')} link={`/blog/${slug}`} />}
		</StyledCard>
	);
};
export default BlogCard;
