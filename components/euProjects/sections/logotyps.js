// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledLogosWrapper } from './Styles';

const Logotyps = ({ items }) => (
	<StyledLogosWrapper>
		{items?.map(({ id, image }) => (
			<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} key={id} />
		))}
	</StyledLogosWrapper>
);

export default Logotyps;
