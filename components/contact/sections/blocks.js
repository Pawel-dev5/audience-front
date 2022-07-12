// HELPERS
import { getStrapiMedia } from '../../../lib/media';
import LongArrow from '../../../assets/longArrow.png';

// STYLES
import { StyledBlocksWrapper, StyledBlock, StyledLinkWrapper } from './Styles';

const Blocks = ({ items }) => (
	<StyledBlocksWrapper>
		{items?.map(({ image, text, link, id }) => (
			<StyledBlock key={id}>
				<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
				<hr />
				<p>{text}</p>

				<StyledLinkWrapper>
					<a href={link} target="_blank">
						idź do strony
					</a>
					<img src={LongArrow} alt="arrow" />
				</StyledLinkWrapper>
			</StyledBlock>
		))}
	</StyledBlocksWrapper>
);

export default Blocks;
