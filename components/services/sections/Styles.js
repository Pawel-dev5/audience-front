import ServicesBackground from '../../../assets/servicesBackgound.jpg';
import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 43.3rem;
	min-height: 45rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-flow: column nowrap;
	background-image: url(${ServicesBackground.src});
	background-position: left;
	background-color: ${({ theme }) => theme.black};
	background-repeat: no-repeat;
	padding: 0 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-left: 9rem;
		background-position: right;
	}
`;

export const StyledHeader = styled.h1`
	font-size: 2.6rem;
	line-height: 4rem;
	max-width: 59rem;
	min-height: 16rem;
	padding-right: 2rem;
	font-weight: ${({ theme }) => theme.bold};
	color: ${({ theme }) => theme.white};
	text-decoration: underline;
	text-decoration-color: ${({ theme }) => theme.white};
	text-underline-offset: 0.5rem;
	text-decoration-thickness: 0.5rem;

	${({ color }) =>
		color &&
		css`
			text-decoration-color: ${color};
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		min-height: 13rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		text-underline-offset: 1.7rem;
		font-size: 4rem;
		min-height: 15rem;
		line-height: 6rem;
	}
`;

export const StyledInputWrapper = styled.div`
	padding-bottom: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		border-left: 2px solid rgba(255, 255, 255, 0.3);
		margin-top: 2rem;
		padding-top: 2.5rem;
		padding-left: 2.3rem;
		min-height: 19.5rem;
		margin-left: 2.5rem;
	}
`;

export const StyledDecs = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 1.3rem;
`;

export const StyledForm = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-flow: column nowrap;
	gap: 1.5rem;
	background: ${({ theme }) => theme.black};

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		flex-direction: row;
		input {
			width: 58%;
		}
	}
`;

export const StyledImageSectionWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	background: ${({ theme }) => theme.white};
	padding: 7rem 2rem;
	gap: 3rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 0;
		padding: 7rem 0;
		flex-direction: row;

		> div {
			width: 50%;
		}
		img {
			width: 80%;
		}
	}
`;

export const StyledFeaturesWrapper = styled.div`
	padding: 2rem;
	padding-top: 7rem;
	text-align: center;
	margin: 0 auto;
	overflow: visible;
	position: relative;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 6.4rem;
	}
`;

export const StyledFeatureCard = styled.div`
	height: 25rem;
	width: 20rem;
	box-shadow: rgb(131 131 131 / 20%) 0px 0px 20px;
	background: ${({ theme }) => theme.white};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 2rem;
	z-index: 100;
	flex-flow: column nowrap;
`;

export const StyledFeatures = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row wrap;
	gap: 3rem;
	padding: 1rem;
	padding-top: 4rem;
	max-width: 70rem;
`;

export const StyledFeatureHeader = styled.h4`
	font-size: 1.25rem;
	padding-top: 1.8rem;
	padding-bottom: 1rem;
	z-index: 10;
	max-width: 12rem;

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`};
`;

export const StyledDescription = styled.p`
	color: ${({ theme }) => theme.black};
	font-size: 1.125rem;
	font-weight: ${({ theme }) => theme.light};
	max-width: 14.3rem;
`;

export const StyledFeatureImage = styled.img`
	max-width: 4rem;
	max-height: 4rem;
	min-width: 4rem;
	min-height: 4rem;
	object-fit: contain;
`;

export const StyledListWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column wrap;
	margin-top: 2rem;
	margin-bottom: 5rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-bottom: 11rem;
	}

	overflow: visible !important;
	* {
		overflow: visible !important;
	}
`;

export const StyledList = styled.div`
	width: 90%;
	max-width: 1000px;
	margin-top: 3rem;
`;

export const StyledCaseSWrapper = styled.div`
	position: relative;
	overflow: visible;
`;

export const StyledCustomerWrapper = styled.div`
	margin: 0 auto;
	width: 80%;
	margin-bottom: 10rem;

	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const StyledCustomers = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}
`;

export const StyledCustomerLogos = styled.div`
	margin-top: 3rem;
	width: 100%;
	max-width: 40.6rem;
	display: grid;
	grid-auto-flow: row;
	column-gap: 2.5rem;
	row-gap: 1rem;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(2, 1fr);
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(3, 1fr);
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(2, 1fr);
	}
`;

export const StyledInfluWrapper = styled.div`
	margin: 0 auto;
	margin-top: 2rem;
`;
