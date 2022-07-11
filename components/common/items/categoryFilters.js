import { useTranslation } from 'next-i18next';

const CategoryFilters = ({ categories }) => {
	const { t } = useTranslation('common');
	return (
		<div>
			<span>{t('categories')}: </span>

			{categories?.map(({ attributes: { name }, id }) => (
				<button type="button" key={id}>
					{name}
				</button>
			))}
		</div>
	);
};

export default CategoryFilters;
