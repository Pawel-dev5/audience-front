// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { Line } from '../items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledSecondWrapper, StyledSecondImage, StyledSecondText } from './Styles';

const SecondCta = ({ image, header, description }) => (
	<StyledSecondWrapper>
		<Line type="secondCta" />

		<StyledSecondText>
			<HeaderWithBottom header={header} description={description} type="carrerSecond" />
		</StyledSecondText>

		<StyledSecondImage>
			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? header} />
		</StyledSecondImage>
	</StyledSecondWrapper>
);

export default SecondCta;
