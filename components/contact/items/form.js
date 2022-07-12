import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import axios from 'axios';

// COMPONENTS
import { Button } from '../../common/items';

// STYLES
import {
	StyledInputsWrapper,
	StyledForm,
	StyledDisc,
	StyledCheckboxWrapper,
	StyledError,
	StyledSuccessWrapper,
} from './Styles';

const Form = ({ disclaimer }) => {
	const { t } = useTranslation('common');

	const initialData = {
		name: '',
		number: '',
		email: '',
		message: '',
	};
	const [formData, setFormData] = useState(initialData);
	const [checked, setChecked] = useState(false);
	const [submitError, setSubmitError] = useState({
		status: 'pending',
		text: null,
	});
	const [axiosStatus, setAxiosStatus] = useState('pending');

	const onSubmit = (e) => {
		e.preventDefault();

		if (formData?.email === '') {
			setSubmitError({
				status: 'error',
				text: t('email.required'),
			});
		} else if (formData?.name === '') {
			setSubmitError({
				status: 'error',
				text: t('full.name.required'),
			});
		} else {
			setSubmitError({
				status: 'pending',
				text: null,
			});

			axios
				.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/api/contact-requests`, {
					data: { ...formData },
				})
				.then(() => {
					setAxiosStatus('success');
					setFormData(initialData);
					setChecked(false);
				})
				.catch((error) => {
					setAxiosStatus('error');
					setChecked(false);
					console.log(error);
				});
		}
	};

	return (
		<StyledForm>
			{axiosStatus !== 'success' && (
				<>
					<StyledInputsWrapper>
						<input
							type="text"
							name="name"
							value={formData?.name}
							onChange={(e) => {
								setFormData({
									...formData,
									name: e.target.value,
								});
							}}
							placeholder={t('full.name')}
						/>
						<input
							type="number"
							name="number"
							value={formData?.number}
							onChange={(e) => {
								setFormData({
									...formData,
									number: e.target.value,
								});
							}}
							placeholder={t('phone')}
						/>
					</StyledInputsWrapper>

					<input
						type="email"
						name="email"
						value={formData?.email}
						onChange={(e) => {
							setFormData({
								...formData,
								email: e.target.value,
							});
						}}
						placeholder="E-mail"
					/>
					<textarea
						name="message"
						value={formData?.message}
						onChange={(e) => {
							setFormData({
								...formData,
								message: e.target.value,
							});
						}}
						placeholder={t('message')}
					/>

					{disclaimer && (
						<StyledCheckboxWrapper>
							<input
								type="checkbox"
								name="checkbox"
								checked={checked}
								onChange={() => {
									setChecked(!checked);
								}}
							/>
							<StyledDisc>{disclaimer}</StyledDisc>
						</StyledCheckboxWrapper>
					)}

					<Button type="submit" text={t('send')} onClick={onSubmit} colorType="black" disabled={!checked} />

					{axiosStatus === 'error' && <StyledError>* {t('error')}</StyledError>}
					{submitError.status === 'error' && submitError.text && <StyledError>* {submitError.text}</StyledError>}
				</>
			)}

			{axiosStatus === 'success' && (
				<StyledSuccessWrapper>
					<h2>{t('send.success')}</h2>
					<br />
					<h4>{t('request.success')}</h4>
				</StyledSuccessWrapper>
			)}
		</StyledForm>
	);
};

export default Form;
