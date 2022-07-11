import { useContext, useEffect } from 'react';

// CONTEXT
import { ContextData } from '../hooks/useGridFilters';

// ITEMS
import { BlogCard, CaseStudiesCard, Media } from '../items';

// STYLES
import { StyledGridWrapper } from './Styles';

const GridContent = ({ items, type }) => {
	const { filteredItems, setFilteredValues } = useContext(ContextData);

	const conditionalComponent = ({ item }) => {
		switch (type) {
			case 'blog':
				return <BlogCard key={item?.attributes?.slug}>{item}</BlogCard>;
			case 'caseStudies':
			case 'caseStudy':
				return <CaseStudiesCard key={item?.attributes?.slug}>{item}</CaseStudiesCard>;
			case 'media':
				return <Media key={item?.attributes?.slug}>{item}</Media>;
			default:
				return null;
		}
	};

	useEffect(() => {
		setFilteredValues(items);
	}, [items]);

	return <StyledGridWrapper type={type}>{filteredItems?.map((item) => conditionalComponent({ item }))}</StyledGridWrapper>;
};

export default GridContent;
