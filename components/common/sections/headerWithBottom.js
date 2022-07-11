// STYLES
import { StyledBlogHeader, StyledHr } from './Styles';
import { Description } from '../items';
const HeaderWithBottom = ({ header, type, description }) => (
	<>
		{header && (
			<>
				<StyledBlogHeader type={type}>{header}</StyledBlogHeader>
				<StyledHr type={type} />
				{description && <Description description={description} type={type} />}
			</>
		)}
	</>
);

export default HeaderWithBottom;
