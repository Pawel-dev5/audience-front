// COMPONENTS
import { HeaderWithBottom } from '../../common/sections';

// STYLES
import { StyledRegisterWrapper, StyledSections } from './Styles';

const Register = ({ header, sections }) => (
	<div>
		{header && <HeaderWithBottom header={header} />}

		{sections && (
			<StyledRegisterWrapper>
				{sections.map(({ id, company, street, postCode, REGON, NIP, KRS }) => (
					<StyledSections key={id}>
						<p>{company}</p>
						<span>{street}</span>
						<span>{postCode}</span>
						<span>{KRS}</span>
						<span>{NIP}</span>
						<span>{REGON}</span>
					</StyledSections>
				))}
			</StyledRegisterWrapper>
		)}
	</div>
);

export default Register;
