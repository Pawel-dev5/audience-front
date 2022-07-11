import Link from 'next/link';
import { getStrapiMedia } from '../../../lib/media';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// STYLES
import {
	StyledFooter,
	StyledCopyright,
	StyledFooterNavMobile,
	StyledPartners,
	StyledSocialIcon,
	StyledLogosWrapper,
	StyledAdressWrapper,
	StyledLogoWrapper,
	StyledContactWrapper,
	StyledFooterWrapper,
	StyledFooterNavDesktop,
} from './Styles';

const Footer = ({ footer }) => {
	if (footer) {
		const {
			logo: { logo: footerLogo, url: footerLogoUrl, alt: logoAlt },
			footerNav,
			socials,
			footerLogos,
			contact: { adress, email, number, number2 },
		} = footer;

		const year = new Date().getFullYear();

		return (
			<StyledFooter>
				<StyledFooterWrapper>
					<StyledContactWrapper>
						{footerLogo && (
							<StyledLogoWrapper>
								<a href={footerLogoUrl ?? '/'}>
									<img src={getStrapiMedia(footerLogo)} alt={logoAlt ?? 'Logo'} />
								</a>
							</StyledLogoWrapper>
						)}
						<div>
							{adress && <span>{adress}</span>}
							<StyledAdressWrapper>
								{number && <a href={`tel:${number}`}>{number}</a>}
								{number2 && <a href={`tel:${number2}`}>{number2}</a>}
								{email && <a href={`mailto:${email}`}>{email}</a>}
							</StyledAdressWrapper>
						</div>
					</StyledContactWrapper>

					<StyledLogosWrapper>
						{socials && (
							<StyledSocialIcon>
								{socials?.map(({ url, icon, alt, id }) => (
									<a href={url ?? null} key={id}>
										<img src={getStrapiMedia(icon)} alt={alt ?? url} />
									</a>
								))}
							</StyledSocialIcon>
						)}

						{footerLogos && (
							<StyledPartners>
								<div>
									{footerLogos?.slice(0, 2)?.map(({ logo, url, alt, id }) => (
										<a href={url ?? null} key={id}>
											<img src={getStrapiMedia(logo)} alt={alt ?? url} />
										</a>
									))}
								</div>

								<div>
									{footerLogos?.slice(2, 3)?.map(({ logo, url, alt, id }) => (
										<a href={url ?? null} key={id}>
											<img src={getStrapiMedia(logo)} alt={alt ?? url} />
										</a>
									))}
								</div>
							</StyledPartners>
						)}
					</StyledLogosWrapper>

					<StyledFooterNavMobile>
						{footerNav?.slice(-4)?.map(({ url, id, title }) => (
							<li key={id}>{url && title && <Link href={url}>{title}</Link>}</li>
						))}
					</StyledFooterNavMobile>

					<StyledFooterNavDesktop>
						{footerNav?.map(({ url, id, title }) => (
							<li key={id}>{url && title && <Link href={url}>{title}</Link>}</li>
						))}
					</StyledFooterNavDesktop>
				</StyledFooterWrapper>

				{year && (
					<StyledCopyright>
						Copyright © {year} Audience Network Sp. z o.o. Part of Cloud Technologies Group
					</StyledCopyright>
				)}
			</StyledFooter>
		);
	}
	return null;
};
export default Footer;
