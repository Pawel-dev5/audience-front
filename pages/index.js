import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// COMPONENTS
import Layout from '../components/common/layout';
import { HomePage } from '../components/home';

// API
import { fetchAPI } from '../lib/api';

const Home = ({ homepage, global }) => (
	<Layout global={global?.attributes} seo={homepage?.seo}>
		<HomePage homepage={homepage} />
	</Layout>
);

export const getServerSideProps = async ({ locale }) => {
	const [homepageRes, globalRes, blogRes, authorsRes] = await Promise.all([
		fetchAPI('/homepage', {
			locale,
			populate: 'deep',
		}),

		fetchAPI('/global', {
			locale,
			populate: 'deep',
		}),

		fetchAPI('/articles', {
			locale,
			pagination: {
				start: 0,
				limit: 2,
			},
			populate: 'deep',
		}),

		fetchAPI('/writers', {
			locale,
			pagination: {
				start: 0,
				limit: 2,
			},
			populate: 'deep',
		}),
	]);

	return {
		props: {
			homepage: {
				...homepageRes?.data?.attributes,
				blog: {
					header: homepageRes?.data?.attributes?.blog?.header,
					articles: blogRes?.data,
					authors: {
						expertHeader: homepageRes?.data?.attributes?.blog?.expertHeader,
						items: authorsRes?.data,
					},
				},
			},
			global: globalRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Home;
