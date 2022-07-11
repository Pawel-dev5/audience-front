// ITEMS
import { Nav, Footer } from './items';
import '@fortawesome/fontawesome-svg-core/styles.css';

// SECTIONS
import { Seo } from './sections';

const Layout = ({ children, global, seo, langRoute }) => {
	if (global) {
		const { navigation, footerNav, socials, footerLogos, contact, logo, seo: globalSeo } = global;
		const footer = { footerNav, socials, footerLogos, contact, logo };

		return (
			<>
				{seo && <Seo seo={seo ?? globalSeo} />}
				{navigation && <Nav navigation={navigation} langRoute={langRoute} />}
				{children}
				{footer && <Footer footer={footer} />}
			</>
		);
	}
	return null;
};

export default Layout;
