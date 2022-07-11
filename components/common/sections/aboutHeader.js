// COMPONNETS
import { HeaderWithBottom } from '../sections';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledHeaderWrapper, StyledHeaderText, StyledHeaderImageWrapper } from './Styles';

const AboutHeader = ({ header, description, image }) => (
	<StyledHeaderWrapper>
		{header && (
			<StyledHeaderText>
				<HeaderWithBottom header={header} description={description} type="aboutHeader" />
			</StyledHeaderText>
		)}

		{image?.data && (
			<StyledHeaderImageWrapper>
				<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
			</StyledHeaderImageWrapper>
		)}
	</StyledHeaderWrapper>
);
export default AboutHeader;
