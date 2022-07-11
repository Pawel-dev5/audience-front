import styled, { css } from 'styled-components';

// ASSETS
import ServicesBackground from '../../../assets/servicesBackgound.jpg';

export const StyledLogosWrapper = styled.div`
	min-height: 10rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;

	.slick-slider {
		width: 100%;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 80%;
		}
	}
	.slick-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		min-height: 10rem;
	}
`;

export const StyledNewsletterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}

	* {
		color: ${({ theme }) => theme.white};
		text-align: center;
	}

	> div:nth-child(1) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column nowrap;
		gap: 2rem;
		background: ${({ theme }) => theme.black};
	}

	> div {
		width: 100%;
		min-height: 28rem;
		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 50%;
		}

		h1 {
			font-weight: ${({ theme }) => theme.bold};
		}
		p {
			width: 23rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			min-height: 28rem;
		}
	}
`;

export const StyledInputsWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	background: ${({ theme }) => theme.black};

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		flex-direction: row;
	}
`;

export const StyledSubmitButton = styled.input`
	cursor: pointer;
	width: 8.4rem;
	height: 3rem;
	padding: 1rem;
	background: ${({ theme }) => theme.black};
	border: 2px solid ${({ theme }) => theme.white};
	margin-top: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		margin-top: 0;
		margin-left: 1rem;
	}
`;

export const StyledCheckboxWrapper = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 0.5rem;
	max-width: 31rem;
	text-align: left;
	width: 100%;
	padding: 0 2.5rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 31rem;
		padding: 0 0.5rem;
	}

	${({ error }) =>
		error &&
		css`
			margin-bottom: 1.4rem;
		`}
`;

export const StyledLabel = styled.label`
	font-size: 0.5rem;
	text-align: left;

	${({ error }) =>
		error &&
		css`
			color: ${({ theme }) => theme.red};
		`}
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
	width: 1.6rem;
	height: 1.6rem;
	background: ${({ theme }) => theme.black};
	border: 1px solid ${({ theme }) => theme.white};
	margin-right: 0.6rem;

	${({ error }) =>
		error &&
		css`
			color: ${({ theme }) => theme.red};
		`}
`;

export const StyledForm = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const StyledError = styled.span`
	align-items: left;
	color: ${({ theme }) => theme.red};
`;

export const StyledBlogHeader = styled.h1`
	position: relative;
	text-align: center;
	font-weight: ${({ theme }) => theme.bold};
	font-size: 2rem;
	max-width: 44rem;
	margin: 0 auto;
	margin-bottom: 2.75rem;
	z-index: 1000;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: 1.87rem;
	}

	${({ type }) => {
		switch (type) {
			case 'caseStudySection':
				return css`
					margin-bottom: 2rem;
				`;
			case 'offersCard':
				return css`
					margin-bottom: 2rem;
					font-size: 1.25rem;
					line-height: 1.8rem;
					font-weight: ${({ theme }) => theme.semiBold};
					max-width: 15rem;
				`;
			case 'carrerSecond':
				return css`
					margin: 0 auto;
					max-width: 28.7rem;
					text-align: left;
					margin-bottom: 2rem;
					margin-left: 0;
				`;
			case 'article':
				return css`
					margin-top: 0;
				`;
			case 'numbers':
				return css`
					margin-top: 9rem;
				`;
			case 'aboutHeader':
				return css`
					margin: 0 auto;
					color: ${({ theme }) => theme.white};
					margin-top: 4rem;
					margin-bottom: 2rem;
					max-width: 30rem;
					text-align: center;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						padding: 0 3rem;
					}
				`;
			case 'about':
				return css`
					max-width: 20rem;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					white-space: wrap;
					word-wrap: break-word;
					color: ${({ theme }) => theme.white};
				`;
			case 'services':
			case 'media':
				return css`
					margin: initial;
					color: ${({ theme }) => theme.white};
					margin-top: 0rem;
					margin-bottom: 0rem;
					text-align: left;
					max-width: 34rem;
				`;
			case 'career':
				return css`
					margin: initial;
					color: ${({ theme }) => theme.black};
					margin-top: 0.7rem;
					margin-bottom: 2.4rem;
					text-align: left;
					max-width: 34rem;
					font-size: 2rem;
					font-weight: ${({ theme }) => theme.bold};
					@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
						margin-top: 5rem;
						padding-left: 1rem;
					}
				`;
			case 'home':
				return css`
					padding: 2.75rem;
					margin-bottom: 1.5rem;
					color: ${({ theme }) => theme.white};
					font-weight: ${({ theme }) => theme.bold};
				`;
			case 'cta':
				return css`
					padding: 0 4rem;
					margin-bottom: 1.5rem;
					color: ${({ theme }) => theme.white};
					font-weight: ${({ theme }) => theme.light};
				`;
			case 'servicesImage':
				return css`
					margin: initial;
					font-weight: ${({ theme }) => theme.light};
					color: ${({ theme }) => theme.black};
					margin-top: 0rem;
					margin-bottom: 0rem;
					text-align: left;
					max-width: 34rem;
				`;
			case 'blog':
			case 'caseStudies':
			case 'caseStudy':
			case 'media':
				return css`
					margin-top: 5rem;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						padding: 0 1rem;
					}
				`;
			case 'features':
				return css`
					max-width: 52rem;
					margin-bottom: 1.6rem;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						padding: 0 2rem;
					}
				`;
			case 'list':
				return css`
					margin: initial;
					font-size: 1.87rem;
					max-width: 52rem;
					margin-bottom: 2rem;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						padding: 0 1rem;
						text-align: left;
					}
				`;
			case 'customers':
				return css`
					max-width: 60rem;
				`;
			case 'influ':
				return css`
					font-size: 1.5rem;
					margin-bottom: 1.5rem;
					font-weight: ${({ theme }) => theme.light};
				`;
			case 'homeSections':
				return css`
					margin-top: 0;
					margin-bottom: 1.5rem;
				`;
			default:
				return css`
					margin-top: 0;
				`;
		}
	}};
`;

export const StyledHr = styled.hr`
	width: 5rem;
	height: 2px;
	background: ${({ theme }) => theme.black};
	margin: 0 auto;

	${({ type }) => {
		switch (type) {
			case 'article':
				return css`
					margin-bottom: 2rem;
				`;
			case 'blog':
				return css`
					margin-bottom: 4rem;
				`;
			case 'numbers':
				return css`
					margin-bottom: 6rem;
				`;
			case 'about':
			case 'home':
				return css`
					display: none;
				`;
			case 'media':
			case 'services':
			case 'servicesImage':
				return css`
					margin: initial;
					margin-top: 2rem;
					margin-bottom: 2.5rem;
					background: ${({ theme }) => theme.white};
				`;
			case 'career':
				return css`
					margin: initial;
					margin-top: 0rem;
					margin-bottom: 0rem;
					background: ${({ theme }) => theme.black};
					@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
						margin-left: 1rem;
					}
				`;
			case 'list':
				return css`
					margin-bottom: 2rem;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						margin-left: 1rem;
					}
				`;
			case 'customers':
				return css`
					margin-bottom: 6rem;
				`;
			case 'influ':
				return css`
					margin-bottom: 1.5rem;
				`;
			case 'cta':
				return css`
					margin-bottom: 1rem;
					display: none;
				`;
			case 'aboutHeader':
				return css`
					margin-bottom: 0;
					background: ${({ theme }) => theme.white};
				`;
			case 'aboutHeader':
				return css`
					margin-bottom: 0;
					background: ${({ theme }) => theme.white};
				`;
			case 'homeSections':
				return css`
					margin-bottom: 2.2rem;
				`;
			case 'carrerSecond':
				return css`
					margin: initial;
					margin-bottom: 1.8rem;
				`;
			default:
				return css`
					margin-bottom: 0;
				`;
		}
	}}
`;

export const StyledImageWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-flow: column nowrap;
	img {
		width: 100%;
		height: 100%;

		object-fit: cover;
		min-height: 40rem;
		max-height: 33rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const StyledCtaWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	background: black;

	* {
		text-align: center;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		> div {
			width: 50%;
			height: 100%;
			max-height: 28.75rem;
		}
	}
`;
export const StyledTextWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		min-height: 20rem;

		${({ type }) =>
			type === 'home' &&
			css`
				margin-bottom: 3.5rem;
			`}
	}
`;

export const StyledConterTextWrapper = styled.div`
	width: fit-content;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 0;

	margin-left: auto;
	margin-right: 4rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-right: 0rem;
		min-height: 20rem;
	}
`;

export const StyledText = styled.p`
	padding: 0;
	font-size: 1.125rem;
	font-weight: ${({ theme }) => theme.light};
	max-width: 28.8rem;
`;

export const StyledHalfWrapper = styled.div`
	display: flex;
	width: 100%;
	background: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	flex-direction: column;

	> :first-child {
		background: ${({ theme }) => theme.black};
		padding: 2.9rem 2.5rem 4.9rem 2.5rem;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 4.25rem 0 5rem 5.5rem;
		}
	}

	padding-left: 0rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		max-height: 40rem;
		padding: 0;

		> div {
			width: 50%;
		}
	}

	${({ color, backgoundColor }) =>
		backgoundColor === 'colorLeft' &&
		css`
			> :first-child {
				background: ${color};
			}
			h1 {
				color: ${({ theme }) => theme.white};
			}

			span {
				color: ${color};
			}
		`}

	${({ color, backgoundColor }) =>
		backgoundColor === 'colorRight' &&
		css`
			background: ${color};
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				> :first-child {
					h1 {
						color: ${color};
					}
				}
			}
		`}

		${({ type }) =>
		type === 'media' &&
		css`
			> :nth-child(2) {
				background: ${({ theme }) => theme.white};
				border: 1px solid ${({ theme }) => theme.black};
				border-right: 0;
			}
		`}
`;

export const StyledNumberWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row wrap;
	gap: 2rem;
	min-height: 20rem;
	padding: 4rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-flow: column wrap;
		padding: 4rem 0;
	}
`;

export const StyledHeaderImageWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	img {
		width: 100%;
		max-height: 30rem;
		object-fit: cover;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		position: absolute;
		top: 21.8rem;
		img {
			max-width: 46.3rem;
		}
	}
`;

// ABOUTHEADER
export const StyledHeaderWrapper = styled.div`
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		min-height: 56rem;
		position: relative;
	}
`;

export const StyledHeaderText = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.black};

	background-image: url(${ServicesBackground.src});
	background-position: left;
	background-color: ${({ theme }) => theme.black};
	background-repeat: no-repeat;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		background-position: right;
		min-height: 37.5rem;
	}
`;
