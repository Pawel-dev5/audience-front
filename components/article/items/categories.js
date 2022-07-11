import { useTranslation } from 'next-i18next';

// ITEMS
import { Button } from '../../common/items';

// STYLES
import { StyledCategoryTitle, StyledFiltersWrapper } from './Styles';

const Categories = ({ categories }) => {
	const { t } = useTranslation('common');

	if (!categories) return null;

	return (
		<StyledFiltersWrapper>
			{categories?.length > 0 && <StyledCategoryTitle>{t('categories')}: </StyledCategoryTitle>}

			{categories?.map(({ attributes: { name }, id }) => (
				<Button
					link={{
						pathname: '/blog',
						query: { name },
					}}
					key={id}
					text={name}
				/>
			))}
		</StyledFiltersWrapper>
	);
};

export default Categories;
