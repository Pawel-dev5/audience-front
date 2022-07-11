// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledAuthor, StyledAuthorImage, StyledTextWrapper } from './Styles';

const Author = ({ picture, name, job }) => (
	<StyledAuthor>
		{picture?.data && <StyledAuthorImage src={getStrapiMedia(picture)} alt={name} />}
		<StyledTextWrapper>
			{name && <p>{name}</p>}
			{job && <p>{job}</p>}
		</StyledTextWrapper>
	</StyledAuthor>
);

export default Author;
