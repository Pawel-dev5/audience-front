// COMMON
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { BrandingCircle } from '../itmes';

// STYLES
import {
	StyledFeaturesWrapper,
	StyledFeatureCard,
	StyledFeatures,
	StyledFeatureHeader,
	StyledDescription,
	StyledFeatureImage,
} from './Styles';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

const Features = ({ features, branding }) => (
	<StyledFeaturesWrapper>
		{features?.header && <HeaderWithBottom header={features?.header} type="features" />}
		{branding?.colo && <BrandingCircle color={branding?.color} type="features" />}

		{features?.features && (
			<div>
				<StyledFeatures>
					{features?.features?.map(({ header, description, image }) => (
						<StyledFeatureCard>
							{image && (
								<StyledFeatureImage
									src={getStrapiMedia(image)}
									alt={image?.data?.attributes?.alternativeText ?? 'icon'}
								/>
							)}

							{header && <StyledFeatureHeader color={branding?.color}>{header}</StyledFeatureHeader>}
							{description && <StyledDescription>{description}</StyledDescription>}
						</StyledFeatureCard>
					))}
				</StyledFeatures>
			</div>
		)}
	</StyledFeaturesWrapper>
);

export default Features;
