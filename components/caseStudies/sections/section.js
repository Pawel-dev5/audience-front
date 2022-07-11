import { SectionVariants } from '../items';

// STYLES
import { StyledSection } from './Styles';

const Section = ({ sections }) => {
	if (!sections) return null;

	return (
		<StyledSection>
			{sections?.map((section, index) => (
				<SectionVariants key={section?.id} {...section} index={index} />
			))}
		</StyledSection>
	);
};

export default Section;
