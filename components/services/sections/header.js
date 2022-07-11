import { useTranslation } from 'next-i18next';

// COMPONENTS
import { Input, Button } from '../../common/items';

// STYLES
import { StyledHeaderWrapper, StyledHeader, StyledInputWrapper, StyledDecs, StyledForm } from './Styles';

const Header = ({ pageHeader, branding }) => {
	const { t } = useTranslation('common');
	const { buttonText, description, header } = pageHeader;

	return (
		<StyledHeaderWrapper>
			{header && <StyledHeader color={branding?.color}>{header}</StyledHeader>}

			<StyledInputWrapper>
				{description && <StyledDecs>{description}</StyledDecs>}
				<StyledForm>
					<Input
						type="email"
						name="email"
						// value={email}
						placeholder={t('your.email')}
						// onChange={handleNameChange}
						// error={submitError.status === "error"}
					/>
					{buttonText && <Button type="button" text={buttonText} onClick={() => {}} colorType="black" />}
				</StyledForm>
			</StyledInputWrapper>
		</StyledHeaderWrapper>
	);
};

export default Header;
