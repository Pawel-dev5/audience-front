import Link from 'next/link';
import { useRouter } from 'next/router';
import 'moment/locale/pl';
import { getStrapiMedia } from '../../../lib/media';
import { useTranslation } from 'next-i18next';

// COMMON
import { Button } from '../../common/items';

// STYLES
import { StyledCSCardContent, StyledCard, StyledCardImage, StyledCSCardTitle, StyledCSCardDesc } from './Styles';

const CaseStudiesCard = ({ children }) => {
	const router = useRouter();
	const { t } = useTranslation('common');

	const {
		attributes: { image, title, slug, description },
	} = children;

	return (
		<Link href={`/case-studies/${slug}`} locale={router?.locale}>
			<StyledCard>
				{image && (
					<StyledCardImage>
						<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.name ?? ''} />
					</StyledCardImage>
				)}

				<StyledCSCardContent>
					<div>
						{title && <StyledCSCardTitle>{title}</StyledCSCardTitle>}
						{description && <StyledCSCardDesc>{description}</StyledCSCardDesc>}
					</div>

					<Button text={t('more')} link={`/case-studies/${slug}`} locale={router?.locale} />
				</StyledCSCardContent>
			</StyledCard>
		</Link>
	);
};

export default CaseStudiesCard;
