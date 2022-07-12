import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Eu } from '../components/euProjects';

const Euprojects = ({ global, pageData }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.seo}>
				<Eu {...pageData} />
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/eu-project', {
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

export default Euprojects;
