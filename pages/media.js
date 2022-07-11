import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// API
import { fetchAPI } from '../lib/api';

// COMPONENTS
import Layout from '../components/common/layout';
import { Grid } from '../components/grid';

// COMMON
import { Cta } from '../components/common/sections';

// STYLES
import { StylesBlogWrapper } from '../styles/Styles';

const Media = ({ global, mediaPage, medias, pagination }) => {
	if (global && mediaPage && medias) {
		const {
			attributes: { header, seo, description, cta },
		} = mediaPage;

		return (
			<Layout global={global?.attributes} seo={seo}>
				<StylesBlogWrapper>
					<Grid
						items={medias}
						header={header}
						type="media"
						description={description}
						pagination={{
							pagination: pagination?.pagination,
							path: '/medias',
						}}
					/>
					<Cta cta={cta} />
				</StylesBlogWrapper>
			</Layout>
		);
	}
	return null;
};

export const getServerSideProps = async ({ locale }) => {
	const [globalRes, mediaPageRes, mediasRes] = await Promise.all([
		fetchAPI('/global', {
			locale,
			populate: 'deep',
		}),
		fetchAPI('/media-page', {
			locale,
			populate: 'deep',
		}),
		fetchAPI('/medias', {
			pagination: {
				page: 1,
				pageSize: 9,
			},
			locale,
			populate: 'deep',
		}),
	]);

	return {
		props: {
			global: globalRes?.data,
			mediaPage: mediaPageRes?.data,
			medias: mediasRes?.data,
			pagination: mediasRes?.meta,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default Media;
