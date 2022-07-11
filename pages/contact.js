import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Contact as ContactPage } from '../components/contact';

const Contact = ({ global, pageData }) => (
	<Layout global={global?.attributes} seo={pageData?.seo}>
		<ContactPage {...pageData} />
		{console.log(pageData)}
	</Layout>
);

export const getServerSideProps = async ({ locale }) => {
	const [globalRes, contactRes] = await Promise.all([
		fetchAPI('/global', {
			locale,
			populate: 'deep',
		}),
		fetchAPI('/contact', {
			locale,
			populate: 'deep',
		}),
	]);

	return {
		props: {
			global: globalRes?.data,
			pageData: contactRes?.data?.attributes,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Contact;
