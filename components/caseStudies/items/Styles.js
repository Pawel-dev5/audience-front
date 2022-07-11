import styled from 'styled-components';

export const StyledBackButtonWrapper = styled.div`
	padding-top: 4rem;
	padding-bottom: 2.5rem;
	width: 100%;
	display: flex;
	align-items: center;

	* {
		color: ${({ theme }) => theme.black};
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-left: 4.4rem;
	}

	svg {
		width: 1.1rem;
		height: 1.1rem;
		margin-right: 0.75rem;
	}
`;

export const StyledSectionWrapper = styled.div`
	position: relative;

	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
	}
`;

export const StyledHeader = styled.h1`
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.bold};

	min-height: 2rem;
`;

export const StyledText = styled.span`
	font-size: 1.125rem;
	max-width: 27.4rem;
	margin: 0 auto;
	margin-top: 2.2rem;
`;

export const StyledTextWrapper = styled.div`
	font-size: 2rem;
	flex-direction: column;
	position: relative;
	width: 100%;
	display: flex;
`;

export const StyledSectionImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-height: 35rem;
	position: relative;

	display: flex;
	img {
		height: 100%;
		width: 100%;
		max-height: 35rem;
		min-height: 35rem;
		object-fit: cover;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-bottom: 2rem;
	}
`;
