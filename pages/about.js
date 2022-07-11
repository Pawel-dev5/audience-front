import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Media } from '../components/about';

const About = ({ global, pageData }) => {
	if (global && pageData) {
		return (
			<Layout global={global?.attributes} seo={pageData?.attributes?.seo}>
				<Media pageData={pageData?.attributes} />
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const pageDataRes = await fetchAPI('/about-us', {
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
			pageData: pageDataRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default About;
