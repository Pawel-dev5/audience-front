// ITEMS
import { HeaderItem } from '../items';

// STYLES
import { StyledHeaderWrapper, StyledHeader, StyledListWrapper, StyledList } from './Styles';

const Header = ({ header, list }) => (
	<StyledHeaderWrapper>
		{header && <StyledHeader>{header}</StyledHeader>}

		{list && (
			<StyledListWrapper>
				<StyledList>
					{list?.map((item, index) => (
						<HeaderItem {...item} key={item?.id} index={index + 1} />
					))}
				</StyledList>
			</StyledListWrapper>
		)}
	</StyledHeaderWrapper>
);

export default Header;
