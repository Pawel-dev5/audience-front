// ITEMS
import { SectionItem } from '../items';

// STYLE
import { StyledSectionsWrapper } from './Styles';

const SectionsList = ({ items }) => (
	<StyledSectionsWrapper>
		{items?.map((item, index) => (
			<SectionItem {...item} index={index} />
		))}
	</StyledSectionsWrapper>
);

export default SectionsList;
