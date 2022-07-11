// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// COMMON
import { HeaderWithBottom } from '../../common/sections';
import { AnimatedLine } from '../../common/items';

// STYLES
import { StyledSectionWrapper, StyledHeader, StyledTextWrapper, StyledText, StyledSectionImageWrapper } from './Styles';

const SectionVariants = ({ header, image, lineBreak, text, type, index }) => (
	<StyledSectionWrapper>
		<StyledSectionImageWrapper>
			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? ''} />
		</StyledSectionImageWrapper>
		{type === 'withNumber' && <AnimatedLine index={index} />}

		<StyledTextWrapper>
			{lineBreak && header && <HeaderWithBottom header={header} type="caseStudySection" />}
			{!lineBreak && header && <StyledHeader>{header}</StyledHeader>}
			<StyledText>{text}</StyledText>
		</StyledTextWrapper>
	</StyledSectionWrapper>
);

export default SectionVariants;
