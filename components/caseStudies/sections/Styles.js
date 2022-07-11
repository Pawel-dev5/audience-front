import styled, { css } from 'styled-components';

export const StyledImageWrapper = styled.div`
	position: relative;
	padding: 0;
	width: 100%;
	max-width: 46rem;
	height: 40vh;
	min-height: 61vh;
	margin: 0 auto;
	margin-top: 4rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		min-height: 43vh;
	}
`;

export const StyledImage = styled.img`
	position: absolute;
	padding: 0;
	width: 97%;
	height: 97%;
	z-index: 10;
	top: 0;
	object-fit: cover;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		min-height: 30.75rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		width: 97%;
		height: 97%;
	}
`;

export const StyledImageBackground = styled.div`
	border: 1px solid ${({ theme }) => theme.black};
	background-color: transparent;
	border: 1px solid hsl(0, 0%, 0%);
	padding: 0;
	width: 97%;
	height: 94.5%;
	position: absolute;
	z-index: 5;
	top: 19px;
	right: 0;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 96%;
		width: 97%;
		right: 7px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		height: 96.5%;
	}
`;

export const StyledHeaderWrapper = styled.div`
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
	}
`;

export const StyledDescription = styled.div`
	text-align: center;
	font-weight: ${({ theme }) => theme.light};
	font-size: 1.125rem;
	max-width: 38rem;
	margin: 0 auto;
	margin-top: 2.7rem;
	margin-bottom: 7.5rem;
`;

export const StyledResultsWrapper = styled.div`
	display: flex;
	padding: 2rem 0;
	width: 100%;
	margin: 0 auto;
	max-width: 65rem;
	align-items: flex-start;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
		gap: 6rem;
	}

	${({ isTitle }) =>
		isTitle &&
		css`
			margin-top: 8rem;
		`}
`;

// SECTION
export const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1rem;
		flex-direction: column;
	}

	> * {
		text-align: center;
		color: ${({ theme }) => theme.black};
		width: 100%;
		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-height: 35rem;
		}
	}
	> div:nth-child(odd) {
		flex-direction: row-reverse;
		img {
			z-index: 1000;
		}
		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			flex-direction: column;
		}
	}
`;
