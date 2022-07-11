import { createContext, useMemo, useState } from 'react';

export const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
	const [global, setGlobal] = useState([]);
	const [defaultSeo, setDefaultSeo] = useState([]);
	const [siteName, setSiteName] = useState([]);

	const setGlobalValues = (values) => {
		setGlobal(values?.attributes);
		setDefaultSeo(values?.attributes?.defaultSeo);
		setSiteName(values?.attributes?.siteName);
	};

	const ContextValue = useMemo(
		() => ({
			global,
			defaultSeo,
			siteName,
			setGlobalValues,
		}),
		[global, setGlobalValues],
	);
	return <GlobalContext.Provider value={ContextValue}>{children}</GlobalContext.Provider>;
};
