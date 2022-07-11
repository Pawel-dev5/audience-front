import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';

// STYLES
import { StyledBackButtonWrapper } from './Styles';

const BackButton = () => {
	const router = useRouter();
	const { t } = useTranslation('common');

	return (
		<StyledBackButtonWrapper>
			<FontAwesomeIcon icon="fa-angle-left" />
			<Link href="/case-studies" locale={router?.locale}>
				{t('case.studies.list')}
			</Link>
		</StyledBackButtonWrapper>
	);
};

export default BackButton;
