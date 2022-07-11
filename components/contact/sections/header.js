import { useTranslation } from 'next-i18next';

// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { Form } from '../items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledHeaderWrapper, StyledFormWrapper, StyledImageWrapper } from './Styles';

const Header = ({ image, disclaimer }) => {
	const { t } = useTranslation('common');

	return (
		<StyledHeaderWrapper>
			<StyledFormWrapper>
				<HeaderWithBottom header={t('contact.header')} type="contactForm" />
				<Form disclaimer={disclaimer} />
			</StyledFormWrapper>

			<StyledImageWrapper>
				<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
			</StyledImageWrapper>
		</StyledHeaderWrapper>
	);
};

export default Header;
