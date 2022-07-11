import { useTranslation } from 'next-i18next';

// SECTIONS
import { Header, Content, MoreArticles } from '../sections';

const Article = ({ article, moreArticles }) => {
	const { t } = useTranslation('common');
	if (!article) return null;

	return (
		<>
			<Header
				image={article?.image}
				title={article?.title}
				author={article?.author?.data?.attributes}
				date={article?.publishedAt}
				categories={article?.categories?.data}
			/>
			{article?.content && <Content content={article?.content} author={article?.author?.data?.attributes} />}
			{moreArticles && <MoreArticles moreArticles={moreArticles} header={t('read.more')} type="blog" />}
		</>
	);
};
export default Article;
