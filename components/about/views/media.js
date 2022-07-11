// COMMON
import { Cta, Counter, AboutHeader } from '../../common/sections';

// SECTIONS
import { MediaCta, Team } from '../sections';

const Media = ({ pageData }) => {
	const { counter, secondCta, firstCta, header, team } = pageData;

	return (
		<div>
			{header && <AboutHeader {...header} />}
			{counter && <Counter counter={counter} type="media" />}
			{firstCta && <MediaCta cta={firstCta} />}
			{team && <Team team={team} />}
			{secondCta && <Cta cta={secondCta} type="about" />}
		</div>
	);
};
export default Media;
