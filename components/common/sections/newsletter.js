import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'next-i18next';

// COMPONENTS
import { Input } from '../items';

// STYLES
import {
	StyledNewsletterWrapper,
	StyledSubmitButton,
	StyledCheckboxWrapper,
	StyledCheckbox,
	StyledForm,
	StyledInputsWrapper,
	StyledError,
	StyledLabel,
} from './Styles';

// HELPERS
import { getStrapiMedia } from '../../../lib/media';

const Newsletter = ({ newsletter }) => {
	if (!newsletter) return null;
	const { t } = useTranslation('common');

	const { description, image, title, checkbox } = newsletter;

	const [email, setEmail] = useState('');
	const [checked, setChecked] = useState(false);
	const [submitError, setSubmitError] = useState({
		status: 'pending',
		text: null,
	});
	const [status, setStatus] = useState('pending');

	const handleNameChange = (e) => {
		setEmail(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (email === '' && checked) {
			setSubmitError({
				status: 'error',
				text: t('email.required'),
			});
		} else if (email !== '' && !checked) {
			setSubmitError({
				status: 'error',
				text: t('agreement.required'),
			});
		} else if (email === '' && !checked) {
			setSubmitError({
				status: 'error',
				text: t('email&&agreement.required'),
			});
		} else {
			setSubmitError({
				status: 'pending',
				text: null,
			});

			axios
				.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/api/newsletters`, {
					data: { email },
				})
				.then(() => {
					setStatus('success');
					setEmail('');
				})
				.catch((error) => {
					setStatus('error');
					console.log(error);
				});
		}
	};

	return (
		<StyledNewsletterWrapper>
			<div>
				{status !== 'success' && (
					<>
						<h1>{title}</h1>
						<p>{description}</p>

						<StyledForm onSubmit={onSubmit}>
							<StyledInputsWrapper>
								<Input
									type="email"
									name="email"
									value={email}
									placeholder={t('your.email')}
									onChange={handleNameChange}
									error={submitError.status === 'error'}
								/>
								<StyledSubmitButton type="submit" value={t('save.me')} />
							</StyledInputsWrapper>

							<StyledCheckboxWrapper error={status === 'error' || submitError.status === 'error'}>
								<StyledCheckbox
									id="newsletter"
									type="checkbox"
									checked={checked}
									onChange={() => setChecked(!checked)}
									error={status === 'error'}
								/>
								<StyledLabel htmlFor="newsletter" error={submitError.status === 'error'}>
									{checkbox}
								</StyledLabel>
							</StyledCheckboxWrapper>

							{status === 'error' && <StyledError>* {t('error')}</StyledError>}
							{submitError.status === 'error' && submitError.text && (
								<StyledError>* {submitError.text}</StyledError>
							)}
						</StyledForm>
					</>
				)}

				{status === 'success' && (
					<>
						<h1>{t('thanks')}</h1>
						<p>{t('success.subscribe')}</p>
					</>
				)}
			</div>

			<div>
				<img src={getStrapiMedia(image)} alt={image?.data?.attributes?.alternativeText} />
			</div>
		</StyledNewsletterWrapper>
	);
};

export default Newsletter;
