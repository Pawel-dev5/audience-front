// COMPONNETS
import { HeaderWithBottom } from '../../common/sections';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledMediaCtaWrapper, StyledMediaImageWrapper, StyledLine } from './Styles';

const MediaCta = ({ cta }) => {
	const { header, description, image } = cta;

	return (
		<StyledMediaCtaWrapper>
			<div>{header && <HeaderWithBottom header={header} description={description} type="aboutCta" />}</div>

			<StyledLine />

			<StyledMediaImageWrapper>
				{image?.data && <img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />}
			</StyledMediaImageWrapper>
		</StyledMediaCtaWrapper>
	);
};

export default MediaCta;
