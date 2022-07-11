// COMMON
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { TextList } from '../itmes';

// STYLES
import { StyledImageSectionWrapper } from './Styles';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

const ImageSection = ({ imageSection, branding }) => {
	const { header, image, items } = imageSection;

	return (
		<StyledImageSectionWrapper>
			<div>{image && <img src={getStrapiMedia(image)} alt={image.data.attributes.alternativeText} />}</div>
			<div>
				{header && <HeaderWithBottom header={header} type="servicesImage" />}
				{items && <TextList items={items} branding={branding} />}
			</div>
		</StyledImageSectionWrapper>
	);
};

export default ImageSection;
