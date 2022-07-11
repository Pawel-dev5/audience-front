// COMMON
import { HeaderWithBottom, Logotypes } from '../../common/sections';
import { StyledMediaWrapper } from './Styles';

const Media = ({ title, logos }) => (
	<StyledMediaWrapper>
		{title && <HeaderWithBottom header={title} />}
		{logos && <Logotypes items={logos} />}
	</StyledMediaWrapper>
);

export default Media;
