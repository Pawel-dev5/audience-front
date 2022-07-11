import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

// COMPONENTS
import Layout from '../../components/common/layout';
import { CaseStudyLayout } from '../../components/caseStudies';

// HELPERS
import { fetchAPI } from '../../lib/api';
import { slugUrlGenerator } from '../../helpers/slugUrlGenerator';

const Article = ({ global, caseStudy, moreCaseStudies }) => {
	const router = useRouter();

	const seo = {
		metaTitle: caseStudy?.attributes?.title,
		metaDescription: caseStudy?.attributes?.description,
		shareImage: caseStudy?.attributes?.image,
		caseStudy: true,
	};

	return (
		<Layout global={global?.attributes} seo={seo} langRoute={slugUrlGenerator(caseStudy, router)}>
			{caseStudy?.attributes && moreCaseStudies && (
				<CaseStudyLayout caseStudy={caseStudy?.attributes} moreCaseStudies={moreCaseStudies} />
			)}
		</Layout>
	);
};

export const getServerSideProps = async ({ locale, params }) => {
	const { slug } = params;

	const caseStudyRes = await fetchAPI('/casestudies', {
		filters: {
			slug,
		},
		locale,
		populate: 'deep',
	});

	const moreCaseStudiesRes = await fetchAPI('/casestudies', {
		filters: {
			slug: {
				$ne: slug,
			},
		},
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
			caseStudy: caseStudyRes?.data[0],
			global: globalRes?.data,
			moreCaseStudies: moreCaseStudiesRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Article;
