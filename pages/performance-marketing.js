import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Services } from '../components/services';

const PerformanceMarketing = ({ global, pageData, caseStudies }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.attributes?.seo}>
				<Services caseStudies={caseStudies} pageData={pageData?.attributes} />
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/performance-marketing', {
		locale,
		populate: 'deep',
	});

	const moreCaseStudiesRes = await fetchAPI('/casestudies', {
		pagination: {
			start: 0,
			limit: 2,
		},
		locale,
		populate: '*',
	});

	const globalRes = await fetchAPI('/global', {
		locale,
		populate: 'deep',
	});

	return {
		props: {
			global: globalRes?.data,
			pageData: pageDataRes?.data,
			caseStudies: moreCaseStudiesRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default PerformanceMarketing;
