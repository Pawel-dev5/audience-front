const isIncludeObject = ({ categories, category }) => {
	const avengers = categories?.data?.filter(({ attributes: { name } }) => category === name);

	return avengers?.length;
};

export const searchByCategoryFilters = (initArray, category) =>
	initArray?.filter(({ attributes: { categories } }) => isIncludeObject({ categories, category }));

export const findObjectInArray = (array, key, arg) => {
	if (array) {
		let searchedObject = null;
		if (key && arg) {
			searchedObject = array?.findIndex((item) => item[key] === arg);
		}
		if (key && !arg) {
			searchedObject = array?.findIndex((item) => item[key]);
		}

		if (Number.isInteger(searchedObject)) {
			return array[searchedObject];
		}
	}
	return null;
};

export const generateArray = (arrayLength, elementsFill) => {
	const arr = [];
	for (let i = 0; i < arrayLength; i++) {
		arr.push(elementsFill ?? { value: i + 1 });
	}
	return arr;
};
