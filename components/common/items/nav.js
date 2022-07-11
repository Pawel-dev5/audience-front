import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Nav = ({ navigation, langRoute }) => {
	const router = useRouter();
	const { t } = useTranslation('common');

	if (!navigation) return null;
	return (
		<div>
			<nav className="uk-navbar-container" data-uk-navbar>
				<div className="uk-navbar-left">
					<ul className="uk-navbar-nav">
						<li>
							<Link href="/">
								<a>Strapi Blog</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="uk-navbar-right">
					<ul className="uk-navbar-nav">
						{navigation?.map((item) => {
							return (
								<li key={item?.id}>
									<Link href={item?.url}>
										<a className="uk-link-reset">{item?.title}</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div>
					{t('current_locale')}: {t(router?.locale)}
				</div>
				<div>
					{/* <Link href="/" locale={router?.locale === "en" ? "pl" : "en"}> */}
					<Link
						href={
							langRoute
								? {
										pathname: langRoute.href,
										locale: langRoute.locale,
								  }
								: ''
						}
						locale={router?.locale === 'en' ? 'pl' : 'en'}
					>
						<button>{t('change_locale')}</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
