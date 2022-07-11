// STYLES
import {
	StyledDesktopListItemWrapper,
	StyledListButton,
	StyledDescWrapper,
	StyledAnimationWrapper,
	StyledButtonWrapper,
	StyledAnimation,
	StyledMobileListWrapper,
	StyledMobileDesc,
} from './Styles';

const Desktop = ({ active, color, onClick, index, header, description }) => (
	<StyledDesktopListItemWrapper>
		<StyledButtonWrapper>
			<StyledListButton type="button" onClick={onClick} color={color} active={active}>
				{index}. {header}
			</StyledListButton>

			<StyledAnimationWrapper>
				<StyledAnimation active={active} />
			</StyledAnimationWrapper>
		</StyledButtonWrapper>

		<StyledDescWrapper>{active && <>{description}</>}</StyledDescWrapper>
	</StyledDesktopListItemWrapper>
);

const Mobile = ({ active, color, onClick, index, header, description }) => (
	<StyledMobileListWrapper>
		<StyledListButton type="button" onClick={onClick} color={color} active={active}>
			{index}. {header}
		</StyledListButton>
		{active && <StyledMobileDesc>{description}</StyledMobileDesc>}
	</StyledMobileListWrapper>
);

const ListItem = (props) => (
	<>
		<Mobile {...props} />
		<Desktop {...props} />
	</>
);

export default ListItem;
