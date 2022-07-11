import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';

import { Career as CareerPage } from '../components/career';

const Career = ({ global, pageData, offers }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.attributes?.seo}>
				<CareerPage pageData={pageData?.attributes} offers={offers} />
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/career', {
		locale,
		populate: 'deep',
	});
	const globalRes = await fetchAPI('/global', {
		locale,
		populate: 'deep',
	});
	const offersRes = await fetchAPI('/career-offers', {
		locale,
		populate: '*',
	});

	return {
		props: {
			global: globalRes?.data,
			pageData: pageDataRes?.data,
			offers: offersRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Career;
