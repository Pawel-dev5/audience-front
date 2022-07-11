import Link from 'next/link';

// STYLES
import { StyledButton } from './Styles';

const Button = ({ active, text, link, onClick, locale, target, colorType, hiddenOnMobile, disabled }) => (
	<>
		{link && (
			<Link href={link ?? ''} passHref shallow locale={locale}>
				<StyledButton as="a" active={active} target={target} colorType={colorType} hiddenOnMobile={hiddenOnMobile}>
					{text}
				</StyledButton>
			</Link>
		)}

		{onClick && (
			<StyledButton
				as="button"
				type="button"
				active={active}
				onClick={(e) => onClick(e)}
				colorType={colorType}
				disabled={disabled}
			>
				{text}
			</StyledButton>
		)}
	</>
);

export default Button;
