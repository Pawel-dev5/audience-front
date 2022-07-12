import ReactMarkdown from 'react-markdown';

// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// STYLES
import { StyledPrivacyWrapper, StyledTitle } from './Styles';

const PrivacyPolicy = ({ content, header }) => (
	<StyledPrivacyWrapper>
		{content && (
			<>
				<HeaderWithBottom header={header} />

				{content?.map(({ title, content }) => (
					<div>
						<StyledTitle>{title}</StyledTitle>
						<ReactMarkdown children={content} />
					</div>
				))}
			</>
		)}
	</StyledPrivacyWrapper>
);

export default PrivacyPolicy;
