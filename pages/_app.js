import App from 'next/app';

// FONTAWESOME
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// TRANSLATIONS
import { appWithTranslation } from 'next-i18next';

// STYLED COMPONENTS
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme/themeDefault';

// API
import { fetchAPI } from '../lib/api';

// FONTAWESOME CONFIG
config.autoAddCss = false;
library.add(fab, faCoffee, faAngleLeft, faAngleRight, faLinkedinIn);

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;

    * {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      box-sizing: border-box;    
      overflow-wrap: break-word;    
      overflow: hidden;
      h1: {
        font-size: 2rem;
      }
    
    }

    
  }
`;

const MyApp = ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Component {...pageProps} />
	</ThemeProvider>
);

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getStaticProps = async (ctx, { locale }) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getStaticProps(ctx);
	// Fetch global site settings from Strapi
	const globalRes = await fetchAPI('/global', {
		populate: 'deep',
		locale,
	});

	// Pass the data to our page via props
	return { ...appProps, pageProps: { global: globalRes.data } };
};

export default appWithTranslation(MyApp);
