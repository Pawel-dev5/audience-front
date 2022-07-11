import styled, { css, keyframes } from 'styled-components';

// ANIMATIONS
export const slideIn = keyframes`
  from {
  	width: 0%;
	}

	to   {
		width: 90%;
	}	
`;

export const StyledTextListWrapper = styled.div`
	ul {
		max-width: 33rem;
	}
	li {
		margin-bottom: 2rem;
	}
`;

export const StylesTextListHeader = styled.h2`
	font-size: 1.52rem;
	padding-bottom: 1.6rem;

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

export const StyledDesc = styled.p`
	font-size: 1.125rem;
	color: ${({ theme }) => theme.black};
`;

export const StyledBrandingCircle = styled.div`
	position: absolute;
	z-index: 50;
	background: ${({ theme }) => theme.black};

	${({ color }) => {
		switch (color) {
			case '#f2a90c':
				return css`
					background: transparent;
					border-bottom: 12.5rem solid ${color};
					width: 0;
					height: 0;
					border-left: 6.25rem solid transparent;
					border-right: 6.25rem solid transparent;
					transform: rotate(-15deg);

					left: -4%;
					top: 3%;

					@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
						left: 7%;
						top: 7%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
						left: 8%;
						top: 4%;
					}

					@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
						left: 25%;
						top: 7%;
					}
				`;
			case '#d00060':
				return css`
					background: ${color};
					border-radius: 0;
					transform: rotate(-45deg);
					width: 13.2rem;
					height: 13.2rem;

					left: -4%;
					top: 5.5%;

					@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
						left: 7%;
						top: 7%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
						left: 13%;
						top: 4%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
						left: 25%;
						top: 7%;
					}
				`;
			default:
				return css`
					background: ${color};
					width: 13.2rem;
					height: 13.2rem;
					border-radius: 50%;

					left: -4%;
					top: 4.5%;

					@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
						left: 7%;
						top: 7%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
						left: 10%;
						top: 6%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
						left: 25%;
						top: 7%;
					}
				`;
		}
	}}

	${({ type }) => {
		switch (type) {
			case 'casestudy':
				return css`
					width: 10rem;
					height: 10rem;

					left: -4%;
					top: 10%;

					@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
						left: 7%;
						top: 7%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
						left: 13%;
						top: 14%;
					}
					@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
						left: 25%;
						top: 7%;
					}
				`;
			case '#d00060':
			default:
				return css``;
		}
	}}
`;

export const StyledDesktopListItemWrapper = styled.div`
	display: none;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-flow: row wrap;
		width: 100%;
	}
`;

export const StyledListButton = styled.button`
	border: none;
	background: transparent;
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.bold};
	height: 3.7rem;
	min-width: fit-content;
	padding-right: 0.5rem;
	white-space: wrap;
	text-align: left;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		white-space: nowrap;
	}

	${({ color, active }) =>
		color &&
		active &&
		css`
			color: ${color};
		`}
`;

export const StyledDescWrapper = styled.p`
	position: absolute;
	right: 0;
	top: 1.5rem;
	width: 42%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: row nowrap;
	padding-left: 20px;
`;

export const StyledAnimationWrapper = styled.div`
	width: 100%;
	min-width: fit-content;
	height: 100%;
`;

export const StyledAnimation = styled.div`
	height: 1px;
	background: ${({ theme }) => theme.grey700};
	width: 0;

	${({ active }) =>
		active &&
		css`
			transition: all 0.3s ease 0s;
			animation: ${slideIn} 2s forwards;
		`}
`;

export const StyledButtonWrapper = styled.div`
	width: 58%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: row nowrap;
`;

export const StyledMobileListWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-flow: column nowrap;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledMobileDesc = styled.p`
	margin: 1rem 0;
`;
