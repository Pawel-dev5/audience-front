// COMMON
import { HeaderWithBottom } from '../../common/sections';
import { AnimatedNumber } from '../../common/items';

// STYLES
import { StyledResultsWrapper } from './Styles';

const Numbers = ({ results, title }) => (
	<>
		{title && <HeaderWithBottom header={title} type="numbers" />}

		{results && (
			<StyledResultsWrapper isTitle={title === null}>
				{results?.map((number) => (
					<AnimatedNumber number={number} key={number?.id} type="result" />
				))}
			</StyledResultsWrapper>
		)}
	</>
);

export default Numbers;
