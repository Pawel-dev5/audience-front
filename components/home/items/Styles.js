import styled, { css, keyframes } from 'styled-components';

// ANIMATIONS
const rotate = keyframes`
	from {
    transform: rotate(0deg);
  	}
	
	to {
		transform: rotate(360deg);
	}
`;
const scale = keyframes`
	0% {
    transform: scale(0.8);
	}	
	
	50% {
		transform: scale(1.1);
	}
	
	100% {
	transform: scale(0.8);
	}	
`;

// ASSETS
import Circle from '../../../assets/circle.png';
import Tringle from '../../../assets/tringle.png';
import Square from '../../../assets/square.png';

export const StyledCard = styled.div`
	height: fit-content;
	min-height: 22.4rem;
	width: 100%;
	max-width: 20.25rem;
	${({ theme }) => theme.shadow};
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 4rem;

	img {
		max-height: 8.4rem;
		min-width: 100%;
		object-fit: cover;
	}

	:hover {
		transform: scale(1.05);
	}
	transition: all 0.5s ease 0s;
`;

export const StyledCardTitle = styled.p`
	font-size: 1.37rem;
	color: ${({ theme }) => theme.black};
`;

export const StyledAuthor = styled.div`
	display: flex;
	align-items: center;
	gap: 1.8rem;
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.black};
`;

export const StyledAuthorImage = styled.img`
	max-width: 6.4rem;
	max-height: 7.2rem;
	min-width: 6.4rem;
	min-height: 7.2rem;
	object-fit: contain;
`;

export const StyledTextWrapper = styled.div`
	* {
		font-size: 1.06rem;
	}
`;

export const StyledHeaderWrapper = styled.div`
	position: relative;
	overflow: visible;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

export const StyledShape = styled.div`
	position: absolute;
	top: -4rem;
	left: -2rem;
	z-index: 1;
	background-position: left;
	background-repeat: no-repeat;
	width: 12.5rem;
	height: 12.5rem;
	transition: all 0.5s ease 0s;

	${({ color }) => {
		switch (color) {
			case '#f2a90c':
				return css`
					left: -4rem;
					background-image: url(${Tringle.src});
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						left: 0.5rem;
					}

					animation: ${rotate} 6s linear infinite;
				`;
			case '#d00060':
				return css`
					background-color: transparent;
					background-image: url(${Square.src});
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						left: -1rem;
					}

					animation: ${rotate} 6s linear infinite;
				`;
			default:
				return css`
					background-color: transparent;
					background-image: url(${Circle.src});
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						left: 1rem;
					}
					animation: ${scale} 2s linear infinite;
				`;
		}
	}};
`;

export const StyledNumberWrapper = styled.div`
	position: relative;
	z-index: 100;
	font-size: 2.5rem;
	padding-bottom: 0.6rem;

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`};
`;

export const StyledDesc = styled.p`
	font-size: 1.125rem;
	color: ${({ theme }) => theme.white};
	max-width: 15.6rem;
	margin-bottom: 2rem;
	margin-top: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledHeader = styled.h3`
	cursor: pointer;
	font-size: 1.3rem;
	max-width: 12.5rem;
	position: relative;
	z-index: 100;
	color: ${({ theme }) => theme.white};
	:hover {
		text-decoration: none;

		${({ color }) =>
			color &&
			css`
				color: ${color};
			`};
	}
`;

export const StyledSection = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	gap: 5rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 0;
		flex-direction: row;
	}
`;

export const StyledImageWrapper = styled.div`
	width: 100%;

	img {
		min-height: 31rem;
		max-height: 35rem;
		width: 100%;
		object-fit: cover;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 54%;
	}

	${({ odd }) =>
		odd % 2 !== 0 &&
		css`
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				padding-left: 2rem;
			}
		`}
	${({ odd }) =>
		odd % 2 === 0 &&
		css`
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				padding-right: 2rem;
			}
		`}
`;

export const StyledSectionTextWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 3rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 1rem 5rem;
		margin: 0 auto;
		margin-right: 0;
		width: 46%;
	}
`;

export const StyledCta = styled.h2`
	font-size: 1.87rem;
	padding-top: 2.5rem;
	padding-bottom: 1.7rem;
`;

export const StyledSectionDesc = styled.p`
	font-size: 1.125rem;
	max-width: 25rem;
`;

export const StyledNumber = styled.p`
	font-size: 1.125rem;
	padding-bottom: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;
export const StyledMobileNumber = styled.p`
	font-size: 1.125rem;
	padding-bottom: 1rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;
