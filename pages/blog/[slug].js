import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

// COMPONENTS
import Layout from '../../components/common/layout';
import { Article as ArticleLayout } from '../../components/article';

// HELPERS
import { fetchAPI } from '../../lib/api';
import { slugUrlGenerator } from '../../helpers/slugUrlGenerator';

const Article = ({ global, article, moreArticles }) => {
	const router = useRouter();

	const seo = {
		metaTitle: article?.attributes?.title,
		metaDescription: article?.attributes?.description,
		shareImage: article?.attributes?.image,
		article: true,
	};

	return (
		<Layout global={global?.attributes} seo={seo} langRoute={slugUrlGenerator(article, router)}>
			{article?.attributes && moreArticles && (
				<ArticleLayout article={article?.attributes} moreArticles={moreArticles} />
			)}
		</Layout>
	);
};

export const getServerSideProps = async ({ locale, params }) => {
	const { slug } = params;

	const articlesRes = await fetchAPI('/articles', {
		filters: {
			slug,
		},
		locale,
		populate: 'deep',
	});

	const moreArticlesRes = await fetchAPI('/articles', {
		filters: {
			slug: {
				$ne: slug,
			},
		},
		pagination: {
			start: 0,
			limit: 3,
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
			article: articlesRes?.data[0],
			global: globalRes?.data,
			moreArticles: moreArticlesRes?.data,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Article;
