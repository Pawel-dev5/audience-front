// COMMON
import { Cta, Counter, Logotypes } from '../../common/sections';

// SECTIONS
import { Media, Blog, Header, Sections } from '../sections';

const HomePage = ({ homepage }) => {
	if (!homepage) return null;
	const { cta, counter, logotyps, media, blog, header, sections } = homepage;

	return (
		<>
			{header && <Header {...header} />}
			{logotyps && <Logotypes items={logotyps?.logos} />}
			{sections && <Sections items={sections} />}
			{counter && <Counter counter={counter} type="media" />}
			{blog && <Blog {...blog} />}
			{media && <Media {...media} />}
			{cta && <Cta cta={cta} type="home" />}
		</>
	);
};
export default HomePage;
