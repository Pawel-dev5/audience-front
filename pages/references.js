import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';

const References = ({ global, pageData }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.seo}>
				<h1>References</h1>
				{console.log(pageData)}
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/reference', {
		locale,
		populate: 'deep',
	});
	const globalRes = await fetchAPI('/global', {
		locale,
		populate: 'deep',
	});

	return {
		props: {
			global: globalRes?.data,
			pageData: pageDataRes?.data?.attributes,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default References;
