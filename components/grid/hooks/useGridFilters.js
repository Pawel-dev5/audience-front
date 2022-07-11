import { createContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import qs from 'qs';

// HELPERS
import { searchByCategoryFilters } from '../../../helpers/arrayHelpers';
import { getStrapiURL } from '../../../lib/api';

export const ContextData = createContext({});

export const ContextProvider = ({ children }) => {
	const router = useRouter();
	const [defaultItems, setDefaultItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [category, setCategory] = useState('');
	const [paginationCount, setPaginationCount] = useState(1);

	// FILTERS
	const setFilteredValues = (values) => {
		setDefaultItems(values);
		setFilteredItems(values);
	};

	useEffect(() => {
		const newArray = searchByCategoryFilters(defaultItems, category);

		if (category !== '') {
			setFilteredItems(newArray);
		} else if (defaultItems?.length > 0) {
			setFilteredItems(defaultItems);
		}
	}, [category]);

	// PAGINATION
	const InitPagination = (page, pageCount, path) => {
		if (page === 0 || page > pageCount || page === paginationCount) return null;

		const query = qs.stringify(
			{
				pagination: {
					page,
					pageSize: 9,
				},
				populate: '*',
				locale: router.locale,
			},
			{
				encodeValuesOnly: true, // prettify URL
			},
		);

		axios
			.get(`${getStrapiURL(`/api${path}${query ? `?${query}` : ''}`)}`)
			.then((res) => {
				setFilteredItems(res?.data?.data);
				setPaginationCount(page);
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth',
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const ContextValue = useMemo(
		() => ({
			defaultItems,
			filteredItems,
			category,
			paginationCount,
			setFilteredValues,
			setCategory,
			setPaginationCount,
			InitPagination,
		}),
		[filteredItems, defaultItems, category, paginationCount],
	);

	return <ContextData.Provider value={ContextValue}>{children}</ContextData.Provider>;
};
