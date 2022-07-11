// COMMON
import { HeaderWithBottom } from '../../common/sections';
import { AnimatedNumber } from '../../common/items';

// STYlES
import { StyledCustomerWrapper, StyledCustomers, StyledCustomerLogos, StyledInfluWrapper } from './Styles';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

const Customers = ({ customers, color }) => {
	const { header, influencers, publishers } = customers;

	return (
		<StyledCustomerWrapper>
			{header && <HeaderWithBottom header={header} type="customers" />}

			<StyledCustomers>
				<div>
					{publishers?.header && <HeaderWithBottom header={publishers?.header} type="influ" />}

					<StyledCustomerLogos>
						{publishers?.logos?.map(({ link, image, id }) => (
							<a href={link} targer="_blank" key={id}>
								<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText ?? 'logo'} />
							</a>
						))}
					</StyledCustomerLogos>
				</div>

				<StyledInfluWrapper>
					{influencers?.header && <HeaderWithBottom header={influencers?.header} type="influ" />}
					{influencers?.counter && <AnimatedNumber number={influencers?.counter} color={color} type="influ" />}
				</StyledInfluWrapper>
			</StyledCustomers>
		</StyledCustomerWrapper>
	);
};
export default Customers;
