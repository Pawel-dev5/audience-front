import { useTranslation } from 'next-i18next';

// COMPONENTS
import { Button } from '../../common/items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import {
	StyledFooterWrapper,
	StyledFooterTextWrapper,
	StyledFooterButtons,
	StyledFooterHeader,
	StyledFooterDesc,
} from './Styles';

const Footer = ({ image, header, description, button }) => {
	const { t } = useTranslation('common');

	return (
		<StyledFooterWrapper>
			<StyledFooterTextWrapper>
				<StyledFooterHeader>{header}</StyledFooterHeader>
				<StyledFooterDesc>{description}</StyledFooterDesc>

				<StyledFooterButtons>
					<Button text={button?.title} onClick={() => {}} colorType="black" />
					<Button text={t('send')} onClick={() => {}} colorType="black" disabled />
				</StyledFooterButtons>
			</StyledFooterTextWrapper>

			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? header} />
		</StyledFooterWrapper>
	);
};
export default Footer;
