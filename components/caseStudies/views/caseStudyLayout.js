import { useTranslation } from 'next-i18next';

// SECTIONS
import { Numbers, MoreCases, Header, Section } from '../sections';

const CaseStudyLayout = ({ caseStudy, moreCaseStudies }) => {
	const { t } = useTranslation('common');
	if (!caseStudy) return null;

	return (
		<>
			{caseStudy && <Header {...caseStudy} />}

			{caseStudy?.sections && <Section sections={caseStudy?.sections} />}

			{caseStudy?.results?.result && (
				<Numbers results={caseStudy?.results?.result} title={caseStudy?.results?.title} />
			)}

			{moreCaseStudies && <MoreCases caseStudies={moreCaseStudies} header={t('caseStudies.more')} type="caseStudy" />}
		</>
	);
};

export default CaseStudyLayout;
