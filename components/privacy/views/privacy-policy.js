import { useState } from 'react';
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

				<div>
					{content?.map(({ title, content, id }) => {
						const [active, setActive] = useState(false);
						return (
							<div key={id}>
								<StyledTitle onClick={() => setActive(!active)}>{title}</StyledTitle>
								{active && content && <ReactMarkdown children={content} />}
							</div>
						);
					})}
				</div>
			</>
		)}
	</StyledPrivacyWrapper>
);

export default PrivacyPolicy;
