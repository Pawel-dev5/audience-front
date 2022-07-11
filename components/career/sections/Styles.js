import styled, { css } from 'styled-components';

const basicCtaWrapper = css`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
	}
`;

export const StyledListWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 11.5rem 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const StyledImageWrapper = styled.div`
	width: 100%;
	max-height: 47.8rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 80%;
	}

	img {
		width: 100%;
		min-height: 47.8rem;
		height: 100%;
		object-fit: cover;

		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 100%;
		}
	}
`;

export const StyledTextWrapper = styled.div`
	width: 100%;
	padding-left: 8rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	text-align: left;

	* {
		color: ${({ theme }) => theme.black};
		font-weight: ${({ theme }) => theme.light};
	}
	ul {
		font-size: 1.125rem;
		padding-left: 1rem;
	}
	ul,
	li {
		overflow: visible;
	}
	li {
		padding-bottom: 0.25rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 1rem;
		ul {
			padding-left: 2rem;
		}
	}
`;

export const StyledListHeader = styled.p`
	font-weight: ${({ theme }) => theme.bold};
	padding-bottom: 1.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-left: 1rem;
	}
`;

export const StyledFirstWrapper = styled.div`
	${basicCtaWrapper};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-height: 30rem;
		margin-top: 5rem;
	}
`;

export const StyledFirstImage = styled.div`
	max-width: 50rem;
	width: 100%;
	position: relative;

	img {
		width: 100%;
		min-height: 30rem;
		height: 100%;
		object-fit: cover;
	}
`;

export const StyledFirstText = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		max-width: 25rem;
	}
	p {
		max-width: 35rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 3rem;
		min-height: 35rem;
	}
`;

export const StyledSecondWrapper = styled.div`
	${basicCtaWrapper};
	justify-content: flex-end;

	img {
		width: 100%;
		height: 100%;

		min-height: 33.75rem;
		object-fit: cover;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-height: 33.75rem;
	}
`;

export const StyledSecondImage = styled.div`
	width: 55%;
	height: 100%;
	position: relative;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 100%;
	}
`;

export const StyledSecondText = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	* {
		text-align: center;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			max-width: 19.6rem;
			text-align: left;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 38%;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		width: 33%;
	}
`;

export const StyledFooterWrapper = styled.div`
	${basicCtaWrapper};
	background: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	text-align: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		min-height: 28.75rem;

		@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
			display: none;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-height: 28.75rem;
	}
`;

export const StyledFooterTextWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	* {
		max-width: 30rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 7rem 2rem;
	}
`;

export const StyledFooterButtons = styled.div`
	max-width: 30rem;
	display: flex;
	gap: 0.9rem;
`;

export const StyledFooterDesc = styled.p`
	font-size: 1.125rem;
	align-items: center;
	padding-bottom: 2rem;
	padding-top: 2.2rem;
`;

export const StyledFooterHeader = styled.h2`
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.bold};
	color: ${({ theme }) => theme.white};
`;

export const StyledOffersWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 7.2rem;
	margin-bottom: 15rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 1022px;
	}
`;

export const StyledOfferCardWrapper = styled.div`
	margin: 0 auto;
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row wrap;
	margin-top: 5rem;
	gap: 3rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 304px);
		grid-auto-flow: row;
		gap: 3.4rem;
		margin-top: 7.1rem;
	}
`;

export const StyledOfferCard = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-flow: column nowrap;
	width: 100%;
	height: 316px;
	padding-top: 2.8rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 304px;
	}
`;
