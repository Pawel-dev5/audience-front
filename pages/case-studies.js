import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Grid } from '../components/grid';

// STYLES
import { StylesBlogWrapper } from '../styles/Styles';

const CaseStudies = ({ global, categories, caseStudiesPage, caseStudies }) => {
	if (global && categories && caseStudiesPage && caseStudies) {
		const {
			attributes: { header, seo, description },
		} = caseStudiesPage;

		return (
			<Layout global={global?.attributes} seo={seo}>
				<StylesBlogWrapper>
					<Grid
						categories={categories}
						items={caseStudies}
						header={header}
						type="caseStudies"
						description={description}
					/>
				</StylesBlogWrapper>
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const [globalRes, categoriesRes, caseStudiesPageRes, caseStudiesRes] = await Promise.all([
		fetchAPI('/global', {
			locale,
			populate: 'deep',
		}),
		fetchAPI('/categories', {
			locale,
			populate: '*',
		}),
		fetchAPI('/case-studies-page', {
			locale,
			populate: '*',
		}),
		fetchAPI('/casestudies', {
			locale,
			populate: '*',
		}),
	]);

	return {
		props: {
			global: globalRes?.data,
			categories: categoriesRes?.data,
			caseStudiesPage: caseStudiesPageRes?.data,
			caseStudies: caseStudiesRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default CaseStudies;
