import { useTranslation } from 'next-i18next';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';
import LongArrow from '../../../assets/longArrow.png';

// STYLES
import {
	StyledBlocksWrapper,
	StyledBlock,
	StyledLinkWrapper,
	StyledDesktopBlocksWrapper,
	StyledDesktopBlock,
	StyledBorderDiv,
	StyledDesktopBlocks,
} from './Styles';

const Mobile = ({ items }) => {
	const { t } = useTranslation('common');

	return (
		<StyledBlocksWrapper>
			{items?.map(({ image, text, link, id }) => (
				<StyledBlock key={id}>
					<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
					<hr />
					<p>{text}</p>

					<StyledLinkWrapper>
						<a href={link} target="_blank">
							{t('go.to.page')}
						</a>
						<img src={LongArrow.src} alt="arrow" />
					</StyledLinkWrapper>
				</StyledBlock>
			))}
		</StyledBlocksWrapper>
	);
};

const Desktop = ({ items }) => {
	const { t } = useTranslation('common');

	return (
		<StyledDesktopBlocks>
			<StyledBlock type="desktop">
				<img src={getStrapiMedia(items[0].image)} alt={items[0].image?.data?.attributes?.alternativeText} />
				<hr />
				<p>{items[0].text}</p>

				<StyledLinkWrapper>
					<a href={items[0].link} target="_blank">
						{t('go.to.page')}
					</a>
					<img src={LongArrow.src} alt="arrow" />
				</StyledLinkWrapper>
			</StyledBlock>

			<StyledBorderDiv />
			<StyledDesktopBlocksWrapper>
				{items?.slice(1).map(({ image, text, link, id }) => (
					<StyledDesktopBlock key={id}>
						<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
						<hr />
						<p>{text}</p>

						<StyledLinkWrapper>
							<a href={link} target="_blank">
								{t('go.to.page')}
							</a>
							<img src={LongArrow.src} alt="arrow" />
						</StyledLinkWrapper>
					</StyledDesktopBlock>
				))}
			</StyledDesktopBlocksWrapper>
		</StyledDesktopBlocks>
	);
};

const Blocks = ({ items }) => (
	<>
		<Mobile items={items} />
		<Desktop items={items} />
	</>
);

export default Blocks;
