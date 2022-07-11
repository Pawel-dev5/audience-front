// COMMON
import { Button } from '../items';
import { HeaderWithBottom } from '../sections';

// HELEPRS
import { getStrapiMedia } from '../../../lib/media';

// STYLE
import { StyledTextWrapper, StyledCtaWrapper, StyledImageWrapper } from './Styles';

const Cta = ({ cta, type }) => (
	<>
		{cta && (
			<StyledCtaWrapper>
				<StyledTextWrapper type={type}>
					{cta?.header && (
						<HeaderWithBottom header={cta?.header} description={cta?.description} type={type ?? 'cta'} />
					)}
					{cta?.button?.title && <Button link={cta?.button?.url} text={cta?.button?.title} colorType="black" />}
				</StyledTextWrapper>

				{cta?.image && (
					<StyledImageWrapper>
						<img src={getStrapiMedia(cta?.image)} alt={cta?.header} />
					</StyledImageWrapper>
				)}
			</StyledCtaWrapper>
		)}
	</>
);

export default Cta;
