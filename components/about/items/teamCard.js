import { useState } from 'react';
import { useTranslation } from 'next-i18next';

// COMMON
import { Button } from '../../common/items';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

// STYLES
import {
	StyledTeamCard,
	StyledCardHeader,
	StyledHeaderText,
	StyledHeaderImage,
	StyledName,
	StyledDescWrapper,
} from './Styles';

const TeamCard = ({ name, job, image, shortDescription, LongDescription }) => {
	const { t } = useTranslation('common');
	const [active, setActive] = useState(false);

	return (
		<StyledTeamCard active={active}>
			<StyledCardHeader>
				<StyledHeaderText>
					{name && <StyledName>{name}</StyledName>}
					{job && <span>{job}</span>}
				</StyledHeaderText>

				{image && (
					<StyledHeaderImage>
						<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
					</StyledHeaderImage>
				)}
			</StyledCardHeader>

			<StyledDescWrapper>
				{active ? <>{LongDescription}</> : <>{shortDescription}</>}
				<Button text={t('more')} onClick={() => setActive(!active)} />
			</StyledDescWrapper>
		</StyledTeamCard>
	);
};

export default TeamCard;
