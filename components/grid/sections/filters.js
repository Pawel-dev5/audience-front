import { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// CONTEXT
import { ContextData } from '../hooks/useGridFilters';

// COMMON
import { Button } from '../../common/items';

// STYLES
import { StyledCategoryTitle, StyledFiltersWrapper } from './Styles';

const GridFilters = ({ categories }) => {
	const { t } = useTranslation('common');
	const { setCategory, category } = useContext(ContextData);
	const router = useRouter();

	if (router && router.query.name) {
		setCategory(router.query.name);
	} else {
		setCategory('');
	}

	return (
		<StyledFiltersWrapper>
			<StyledCategoryTitle>{t('categories')}: </StyledCategoryTitle>

			{categories?.map(({ attributes: { name }, id }) => {
				const query = category === name ? {} : { name };

				return (
					<Button
						type="button"
						key={id}
						link={{
							query,
						}}
						active={(name || router.query.name) === category}
						text={name}
					/>
				);
			})}
		</StyledFiltersWrapper>
	);
};

export default GridFilters;
