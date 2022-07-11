import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// ITEMS
import { Footer } from '../items';

// ASSETS
import Facebook from '../../../assets/facebook.png';
import Twitter from '../../../assets/twitter.png';
import In from '../../../assets/inGrey.png';

// STYLES
import { StyledContentWrapper, StyledSocialsWrapper, StyledContent, StyledContentContainer } from './Styles';

const Content = ({ content, author }) => {
	const { t } = useTranslation('common');
	const router = useRouter();

	const shareIcons = [
		{
			id: 1,
			icon: Facebook.src,
			url: `https://www.facebook.com/sharer/sharer.php?u=${router.asPath}`,
		},
		{
			id: 2,
			icon: Twitter.src,
			url: `https://www.facebook.com/sharer/sharer.php?u=${router.asPath}`,
		},
		{
			id: 3,
			icon: In.src,
			url: `https://www.facebook.com/sharer/sharer.php?u=${router.asPath}`,
		},
	];

	return (
		<StyledContentWrapper>
			<StyledSocialsWrapper>
				<span>{t('share.post')}</span>

				{shareIcons.map(({ icon, url, id }) => (
					<a href={url} key={id}>
						<img src={icon} alt="Share icon" />
					</a>
				))}
			</StyledSocialsWrapper>

			<StyledContentContainer>
				{content && (
					<StyledContent>
						<ReactMarkdown children={content} />
					</StyledContent>
				)}

				{author && <Footer author={author} />}
			</StyledContentContainer>
		</StyledContentWrapper>
	);
};

export default Content;
