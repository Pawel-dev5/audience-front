// COMMON
import { AboutHeader } from '../../common/sections';

// SECTIONS
import { List, FirstCta, SecondCta, Footer, Offers } from '../sections';

const Career = ({ pageData, offers }) => {
	const { firstCta, secondCta, header, list, cta } = pageData;

	return (
		<>
			{header && <AboutHeader {...header} />}
			{firstCta && <FirstCta {...firstCta} />}
			{offers && <Offers offers={offers} />}
			{secondCta && <SecondCta {...secondCta} />}
			{list && <List {...list} />}
			{cta && <Footer {...cta} />}
		</>
	);
};

export default Career;
