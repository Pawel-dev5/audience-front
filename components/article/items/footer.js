// ASSETS
import In from '../../../assets/inBlack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import { StyledAuthorWrapper, StyledAuthorName, StyledIn, StyledEmail, StyledFooterWrapper } from './Styles';

const Footer = ({ author }) => {
	const { name, linkedInLink, email, job, picture } = author;

	return (
		<StyledFooterWrapper>
			<StyledAuthorWrapper>
				<div>
					{name && <StyledAuthorName>{name}</StyledAuthorName>}
					{job && <p>{job}</p>}

					{email && (
						<a href={`mailto:${email}`}>
							<StyledEmail>{email}</StyledEmail>
						</a>
					)}

					{linkedInLink && (
						<a href={linkedInLink} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
						</a>
					)}
				</div>

				{picture?.data && <img src={getStrapiMedia(picture)} alt={picture?.data?.attributes?.alternativeText} />}
			</StyledAuthorWrapper>
		</StyledFooterWrapper>
	);
};

export default Footer;
