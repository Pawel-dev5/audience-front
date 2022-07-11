// COMMON
import { HeaderWithBottom } from '.';
import { AnimatedNumber } from '../items';

// STYLE
import { StyledConterTextWrapper, StyledHalfWrapper, StyledText, StyledNumberWrapper } from './Styles';

const CounterSection = ({ counter: props, color, type: pageType }) => {
	const { counter, description, header, type: backgoundColor } = props;

	return (
		<StyledHalfWrapper color={color} type={pageType} backgoundColor={backgoundColor}>
			<div>
				<StyledConterTextWrapper>
					{header && <HeaderWithBottom header={header} type={pageType} />}
					{description && <StyledText>{description}</StyledText>}
				</StyledConterTextWrapper>
			</div>

			<StyledNumberWrapper>
				{counter && (
					<>
						{counter.map((number) => (
							<AnimatedNumber key={number?.id} number={number} type={pageType} />
						))}
					</>
				)}
			</StyledNumberWrapper>
		</StyledHalfWrapper>
	);
};

export default CounterSection;
