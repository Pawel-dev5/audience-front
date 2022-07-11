// STYLES
import { StyledTextListWrapper, StylesTextListHeader, StyledDesc } from './Styles';

const TextList = ({ items, branding }) => (
	<StyledTextListWrapper>
		{items?.map(({ header, description }) => (
			<ul>
				<li>
					{header && <StylesTextListHeader color={branding?.color}>{header}</StylesTextListHeader>}
					{description && <StyledDesc>{description}</StyledDesc>}
				</li>
			</ul>
		))}
	</StyledTextListWrapper>
);

export default TextList;
