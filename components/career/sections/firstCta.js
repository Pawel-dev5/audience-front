// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { Line } from '../items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledFirstWrapper, StyledFirstImage, StyledFirstText } from './Styles';

const FirstCta = ({ image, header, description }) => (
	<StyledFirstWrapper>
		<Line />

		<StyledFirstText>
			<HeaderWithBottom header={header} description={description} />
		</StyledFirstText>

		<StyledFirstImage>
			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? header} />
		</StyledFirstImage>
	</StyledFirstWrapper>
);

export default FirstCta;
