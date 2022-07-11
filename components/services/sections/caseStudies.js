// COMMON
import { BrandingCircle } from '../itmes';
import { Grid } from '../../grid/';

// STYLED
import { StyledCaseSWrapper } from './Styles';

const CaseStudies = ({ items, header, color }) => (
	<StyledCaseSWrapper>
		{items && <Grid items={items} type="caseStudy" header={header} />}
		{color && <BrandingCircle color={color} type="casestudy" />}
	</StyledCaseSWrapper>
);

export default CaseStudies;
