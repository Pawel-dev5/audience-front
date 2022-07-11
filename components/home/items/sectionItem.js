import { useTranslation } from 'next-i18next';

// COMPONENTS
import { Button, AnimatedLine } from '../../common/items';
import { HeaderWithBottom } from '../../common/sections';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import {
	StyledSection,
	StyledSectionTextWrapper,
	StyledImageWrapper,
	StyledCta,
	StyledSectionDesc,
	StyledNumber,
	StyledMobileNumber,
} from './Styles';

const SectionItem = ({ cta, description, header, image, lineAnimation, link, index }) => {
	const { t } = useTranslation('common');

	return (
		<StyledSection>
			<StyledSectionTextWrapper>
				<HeaderWithBottom header={header} type="homeSections" />

				<StyledMobileNumber>0{index + 1}.</StyledMobileNumber>
				{lineAnimation === 'Without line animation' && <StyledNumber>0{index + 1}.</StyledNumber>}

				<StyledSectionDesc>{description}</StyledSectionDesc>
				<StyledCta>{cta}</StyledCta>

				<Button text={t('more')} link={link} />
			</StyledSectionTextWrapper>

			{lineAnimation === 'With line animation' && <AnimatedLine index={index} type="home" />}

			<StyledImageWrapper odd={index}>
				<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? header} />
			</StyledImageWrapper>
		</StyledSection>
	);
};

export default SectionItem;
