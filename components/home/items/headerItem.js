import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// COMMON
import { Button } from '../../common/items';

// STYLES
import { StyledHeaderWrapper, StyledNumberWrapper, StyledShape, StyledDesc, StyledHeader } from './Styles';

const HeaderItem = ({ color, description, header, url, index }) => {
	const { t } = useTranslation('common');
	const router = useRouter();

	return (
		<StyledHeaderWrapper>
			<StyledShape color={color} />
			<StyledNumberWrapper color={color}>{index && <span>0{index}.</span>}</StyledNumberWrapper>

			{header && (
				<StyledHeader as="a" href={url} color={color}>
					{header}
				</StyledHeader>
			)}
			{description && <StyledDesc>{description}</StyledDesc>}

			<Button text={t('more')} link={url} locale={router?.locale} colorType="black" hiddenOnMobile />
		</StyledHeaderWrapper>
	);
};

export default HeaderItem;
