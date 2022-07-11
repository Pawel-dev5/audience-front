import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Newsletter } from '../components/common/sections';
import { Grid } from '../components/grid';

// STYLES
import { StylesBlogWrapper } from '../styles/Styles';

const Blog = ({ global, articles, categories, blog }) => {
	if (global && articles && categories && blog) {
		const {
			attributes: { header, newsletter, seo },
		} = blog;

		return (
			<Layout global={global?.attributes} seo={seo}>
				<StylesBlogWrapper>
					<Grid categories={categories} items={articles} header={header} type="blog" />
					<Newsletter newsletter={newsletter} />
				</StylesBlogWrapper>
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const [globalRes, articlesRes, categoriesRes, blogsRes] = await Promise.all([
		fetchAPI('/global', {
			locale,
			populate: 'deep',
		}),
		fetchAPI('/articles', {
			locale,
			populate: '*',
		}),
		fetchAPI('/categories', {
			locale,
			populate: '*',
		}),
		fetchAPI('/blog', {
			locale,
			populate: {
				header: '*',
				newsletter: { populate: '*' },
				seo: { populate: '*' },
			},
		}),
	]);

	return {
		props: {
			global: globalRes?.data,
			articles: articlesRes?.data,
			categories: categoriesRes?.data,
			blog: blogsRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Blog;
