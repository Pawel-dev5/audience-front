import { useState } from 'react';
import { useTranslation } from 'next-i18next';

// COMPONENTS
import { Button } from '../../common/items';

// STYLES
import { StyledInputsWrapper, StyledForm, StyledDisc, StyledCheckboxWrapper, StyledError } from './Styles';

const Form = ({ disclaimer }) => {
	const { t } = useTranslation('common');

	const initialData = {
		name: '',
		number: '',
		email: '',
		message: '',
		checked: '',
	};
	const [formData, setFormData] = useState(initialData);
	const [submitError, setSubmitError] = useState({
		status: 'pending',
		text: null,
	});
	const [axiosStatus, setAxiosStatus] = useState('pending');

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		if (formData?.email === '') {
			setSubmitError({
				status: 'error',
				text: t('email.required'),
			});
		} else if (formData?.email !== '') {
			setSubmitError({
				status: 'error',
				text: t('agreement.required'),
			});
		} else if (formData?.email === '') {
			setSubmitError({
				status: 'error',
				text: t('email&&agreement.required'),
			});
		} else {
			setSubmitError({
				status: 'pending',
				text: null,
			});

			// axios
			// 	.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/api/newsletters`, {
			// 		data: { ...formData },
			// 	})
			// 	.then(() => {
			// 		setAxiosStatus('success');
			// 		setFormData(initialData);
			// 	})
			// 	.catch((error) => {
			// 		setAxiosStatus('error');
			// 		console.log(error);
			// 	});
		}
	};

	return (
		<StyledForm>
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
						checked={formData?.checked}
						onChange={() => {
							setFormData({
								...formData,
								checked: !formData?.checked,
							});
						}}
					/>
					<StyledDisc>{disclaimer}</StyledDisc>
				</StyledCheckboxWrapper>
			)}

			<Button type="submit" text={t('send')} onClick={onSubmit} colorType="black" disabled={!formData?.checked} />

			{axiosStatus === 'error' && <StyledError>* {t('error')}</StyledError>}
			{submitError.status === 'error' && submitError.text && <StyledError>* {submitError.text}</StyledError>}
		</StyledForm>
	);
};

export default Form;
