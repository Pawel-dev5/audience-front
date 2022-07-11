export const slugUrlGenerator = (data, router) => {
	if (data && router) {
		const baseFilter = data?.attributes?.localizations?.data[0]?.attributes;
		const langSlug = baseFilter?.slug;
		const langlocale = baseFilter?.locale;
		const basePath = router?.route?.slice(0, -7);
		const langRoute = { href: `${basePath}/${langSlug}`, locale: langlocale };

		return langRoute;
	}
	('');
};
