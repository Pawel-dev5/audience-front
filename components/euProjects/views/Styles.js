import styled from 'styled-components';

export const StyledEuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	margin-top: 4rem;

	h1 {
		max-width: 765px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		h1 {
			font-size: 1.8rem;
			padding: 0 1rem;
		}
	}
`;
