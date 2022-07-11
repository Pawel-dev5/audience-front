// COMMON
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { BackButton } from '../items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledImageWrapper, StyledImage, StyledImageBackground, StyledHeaderWrapper, StyledDescription } from './Styles';

const Header = ({ title, image, description }) => (
	<StyledHeaderWrapper>
		<BackButton />

		{title && <HeaderWithBottom header={title} type="article" />}

		{image && (
			<StyledImageWrapper>
				<StyledImageBackground />

				<StyledImage src={getStrapiMedia(image)} alt={image.data.attributes.alternativeText} />
			</StyledImageWrapper>
		)}

		{description && <StyledDescription>{description}</StyledDescription>}
	</StyledHeaderWrapper>
);

export default Header;
