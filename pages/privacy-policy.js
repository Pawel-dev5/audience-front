import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { PrivacyPolicy as Page } from '../components/privacy';

const PrivacyPolicy = ({ global, pageData }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.seo}>
				<Page content={pageData?.content} header={pageData?.header} />
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/polityka-prywatnosci', {
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

export default PrivacyPolicy;
