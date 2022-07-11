import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';

// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// COMMON
import { Button } from '../../common/items';

// STYLES
import {
	StyledCareerItemWrapper,
	StyledItemBackWrapper,
	StyledContentWrapper,
	StyledCarrerItem,
	StyledFormWrapper,
	StyledCareer,
	StyledDisclaimer,
	StyledFormHeader,
	StyledCheckbox,
	StyledDicsWrapper,
	StyledForm,
	StyledTextArea,
	StyledInput,
} from './Styles';

const CareerItem = ({ city, content, disclaimer, formHeader, header }) => {
	const router = useRouter();
	const { t } = useTranslation('common');

	return (
		<StyledCareerItemWrapper>
			<StyledItemBackWrapper>
				<FontAwesomeIcon icon="fa-angle-left" />
				<Link href="/career" locale={router?.locale}>
					{t('offer.back')}
				</Link>
			</StyledItemBackWrapper>

			<StyledCarrerItem>
				<StyledCareer>
					{header && <HeaderWithBottom header={header} type="careerItem" />}

					{content && (
						<StyledContentWrapper>
							<ReactMarkdown children={content} />
						</StyledContentWrapper>
					)}
				</StyledCareer>

				{header && (
					<StyledFormWrapper>
						{header && <HeaderWithBottom header={header} description={city} type="careerItemMini" />}

						{formHeader && <StyledFormHeader>{formHeader}</StyledFormHeader>}

						<StyledForm>
							<StyledInput type="name" name="name" placeholder={t('full.name')} />
							<StyledInput type="email" name="email" placeholder="Email" />
							<Button text={t('attach.cv')} onClick={() => {}} />
							<StyledTextArea type="textarea" name="text" placeholder={t('any.question')} />

							{disclaimer && (
								<StyledDicsWrapper>
									<StyledCheckbox type="checkbox" />
									<StyledDisclaimer>{disclaimer}</StyledDisclaimer>
								</StyledDicsWrapper>
							)}
							<Button text={t('send')} onClick={() => {}} />
						</StyledForm>
					</StyledFormWrapper>
				)}
			</StyledCarrerItem>
		</StyledCareerItemWrapper>
	);
};

export default CareerItem;
