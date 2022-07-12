import styled from 'styled-components';

export const StyledPrivacyWrapper = styled.div`
	margin: 0 auto;
	margin-top: 4rem;
	margin-bottom: 11.5rem;
	max-width: 43.4rem;

	> div {
		margin-top: 4rem;
	}
	p {
		margin-bottom: 4rem;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 2rem;
		margin-bottom: 9rem;
	}
`;

export const StyledTitle = styled.h4`
	font-weight: ${({ theme }) => theme.bold};
	margin-bottom: 2rem;
	cursor: pointer;
`;
