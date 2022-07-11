import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-height: 684px;
	display: flex;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
	}
`;

export const StyledFormWrapper = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 6.75rem;
	}
`;

export const StyledImageWrapper = styled.div`
	width: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;
