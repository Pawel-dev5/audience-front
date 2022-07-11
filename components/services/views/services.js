// SECTIONS
import { CaseStudies, Header, ImageSection, Features, List, Customers } from '../sections';

// COMMON
import { Cta, Counter, Logotypes } from '../../common/sections';

const Services = ({ caseStudies, pageData }) => {
	const {
		branding,
		caseStudiesHeaader,
		cta,
		features,
		firstCounter,
		secondCounter,
		header: pageHeader,
		imageSection,
		list,
		logotyps,
		customers,
	} = pageData;

	return (
		<div>
			{pageHeader && <Header pageHeader={pageHeader} branding={branding} />}
			{logotyps && <Logotypes items={logotyps?.logos} />}
			{firstCounter && <Counter counter={firstCounter} color={branding?.color} type="services" />}
			{imageSection && <ImageSection imageSection={imageSection} branding={branding} />}
			{secondCounter && <Counter counter={secondCounter} color={branding?.color} type="services" />}
			{features && <Features features={features} branding={branding} />}
			{list && <List list={list} color={branding?.color} />}
			{caseStudies && <CaseStudies items={caseStudies} header={caseStudiesHeaader} color={branding?.color} />}
			{customers && <Customers customers={customers} color={branding?.color} />}
			{cta && <Cta cta={cta} />}
		</div>
	);
};
export default Services;
