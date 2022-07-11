import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

// COMPONENTS
import Layout from '../../components/common/layout';
import { CareerItem } from '../../components/career';

// HELPERS
import { fetchAPI } from '../../lib/api';
import { slugUrlGenerator } from '../../helpers/slugUrlGenerator';

const Career = ({ global, career }) => {
	const router = useRouter();

	const seo = {
		metaTitle: career?.attributes?.title,
		metaDescription: career?.attributes?.description,
		shareImage: career?.attributes?.image,
		article: true,
	};

	return (
		<Layout global={global?.attributes} seo={seo} langRoute={slugUrlGenerator(career, router)}>
			<CareerItem {...career} />
		</Layout>
	);
};

export const getServerSideProps = async ({ locale, params }) => {
	const { slug } = params;

	const careerRes = await fetchAPI('/career-offers', {
		filters: {
			slug,
		},
		locale,
		populate: 'deep',
	});

	const globalRes = await fetchAPI('/global', {
		locale,
		populate: 'deep',
	});

	return {
		props: {
			career: careerRes?.data[0]?.attributes,
			global: globalRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Career;
