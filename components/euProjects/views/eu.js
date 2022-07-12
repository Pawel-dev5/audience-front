// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';
import { Logotyps, List } from '../sections';

// STYLES
import { StyledEuWrapper } from './Styles';

const Eu = ({ header, list, logos }) => (
	<StyledEuWrapper>
		{logos?.logos.length > 0 && <Logotyps items={logos?.logos} />}
		{header && <HeaderWithBottom header={header} />}
		{list?.length > 0 && <List list={list} />}
	</StyledEuWrapper>
);

export default Eu;
