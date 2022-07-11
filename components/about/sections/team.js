// COMPONNETS
import { HeaderWithBottom } from '../../common/sections';

// ITEMS
import { TeamCard } from '../items';

// STYLES
import { StyledTeamWrapper, StyledTeamList } from './Styles';

const Team = ({ team }) => {
	const { header, description, teamlist } = team;

	return (
		<StyledTeamWrapper>
			{header && <HeaderWithBottom header={header} description={description} type="aboutCta" />}

			{teamlist && (
				<StyledTeamList>
					{teamlist?.map((item) => (
						<TeamCard key={item?.id} {...item} />
					))}
				</StyledTeamList>
			)}
		</StyledTeamWrapper>
	);
};

export default Team;
