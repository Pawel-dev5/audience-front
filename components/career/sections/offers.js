import { useTranslation } from 'next-i18next';

// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// COMMON
import { Button } from '../../common/items';

// STYLE
import { StyledOffersWrapper, StyledOfferCardWrapper, StyledOfferCard } from './Styles';

const Offers = ({ offers }) => {
	const { t } = useTranslation('common');
	if (!offers) return null;
	console.log(offers);

	return (
		<StyledOffersWrapper>
			<HeaderWithBottom header={t('job.offer')} />

			<StyledOfferCardWrapper>
				{offers?.map(({ attributes: { city, header, slug }, id }) => (
					<StyledOfferCard key={id}>
						<HeaderWithBottom header={header} description={city} type="offersCard" />
						<Button text={t('details')} link={`/career/${slug}`} />
					</StyledOfferCard>
				))}
			</StyledOfferCardWrapper>
		</StyledOffersWrapper>
	);
};

export default Offers;
