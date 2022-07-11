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

export const StyledLine = styled.div`
	font-size: 1.125rem;
	z-index: 999;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;

	${({ odd }) =>
		odd % 2 !== 0 &&
		css`
			@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
				left: auto !important;
				right: 3.75rem;
				flex-direction: row-reverse;
			}
		`}

	${({ type, odd }) =>
		type === 'home' &&
		odd % 2 !== 0 &&
		css`
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				display: none;
			}
			@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
				flex-direction: row;
				right: 47%;
			}
		`}

		

	${({ type, odd }) =>
		type === 'home' &&
		odd % 2 === 0 &&
		css`
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				display: none;
			}
			@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
				flex-direction: row-reverse;
				right: 27%;
			}
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		position: absolute;
		top: 3.5rem;
		left: 3.75rem;
		width: 65%;
		margin-bottom: 0;

		${({ type }) =>
			type === 'home' &&
			css`
				width: 40%;
				left: 30%;
			`}

		> div {
			display: block;
			height: 2px;
			background: ${({ theme }) => theme.grey700};
			${({ visible }) =>
				visible &&
				css`
					transition: all 0.5s ease 0s;
					animation: ${slideIn} 2s forwards;
				`}
		}
	}
`;

export const StyledFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	padding-top: 4rem;
`;

export const StyledCopyright = styled.span`
	text-align: center;
	width: 100%;
	color: ${({ theme }) => theme.grey600};
	margin: 2rem 0;
	padding: 1rem;
	position: relative;

	:before {
		content: '';
		position: absolute;
		display: block;
		right: 0px;
		top: 0px;
		height: 1px;
		left: 20vw;
		background: rgb(112, 112, 112);
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 1rem;
		text-align: right;
		max-width: 1180px;
		:before {
			left: 17.5rem;
		}
	}
`;

export const StyledFooterNavMobile = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 1rem;
	padding-bottom: 2rem;

	li {
		font-size: 0.9rem;
		max-width: 9.4rem;
		text-align: center;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 55%;
		padding-bottom: 0;
		display: none;
	}
`;

export const StyledFooterNavDesktop = styled.ul`
	width: 55%;
	padding-bottom: 0;
	margin: 7px 0px 0px;
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(4, 1fr);
	grid-auto-flow: column;
	column-gap: 2.5rem;
	* {
		font-size: 0.9rem;
		color: ${({ theme }) => theme.black};
	}

	li {
		max-width: 8.1rem;
		font-size: 0.875rem;
		max-width: 9.4rem;
		height: 3.5rem;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const StyledSocialIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 15%;
	gap: 0.2rem;
	margin-bottom: 2rem;

	a {
		width: 20%;
		height: 100%;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: flex-start;
		justify-content: flex-start;
	}
`;
export const StyledPartners = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;

	div:not(:first-child) {
		margin-top: 0.2rem;
		a {
			width: 85%;
		}
	}

	> div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			align-items: flex-start;
			justify-content: flex-start;
		}

		a:not(:first-child) {
			width: 40%;
		}

		> a {
			width: 75%;
			height: 100%;
		}
	}
`;
export const StyledLogosWrapper = styled.div`
	width: 12.5rem;
	padding-bottom: 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 18%;
		padding-bottom: 0;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 27%;
	}
`;

export const StyledContactWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 2rem;
	div:nth-child(2) {
		max-width: 12.5rem;
		margin-top: 1rem;
	}

	* {
		color: ${({ theme }) => theme.grey700};
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 20%;
		margin-bottom: 0;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 35%;
	}
`;

export const StyledAdressWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 0.2rem;
	margin-top: 2rem;

	* {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;

export const StyledLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
	a {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 63%;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		a {
			img {
				width: 85%;
			}
		}
	}
`;

export const StyledFooterWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		width: 93%;
		max-width: 1180px;
		display: flex;
		justify-content: space-between;
	}
`;

export const StyledButton = styled.div`
	margin: 0 auto;
	text-decoration: none;
	align-items: center;
	display: flex;
	max-height: 2.3rem;
	white-space: nowrap;
	width: fit-content;
	cursor: pointer;
	font-size: 1.1rem;
	padding: 0.7rem;
	color: ${({ theme }) => theme.black};
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.black};

	${({ active, type }) =>
		active &&
		!type &&
		css`
			text-decoration: none;
			background: ${({ theme }) => theme.black};
			color: ${({ theme }) => theme.white};
		`}

	${({ hiddenOnMobile }) =>
		hiddenOnMobile &&
		css`
			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				display: none;
			}
		`}

	:hover {
		text-decoration: none;
		background: ${({ theme }) => theme.black};
		color: ${({ theme }) => theme.white};
	}

	${({ type, active }) =>
		type &&
		active &&
		css`
			border: 1px solid ${({ theme }) => theme.black};
		`}

	${({ colorType }) =>
		colorType === 'black' &&
		css`
			background: ${({ theme }) => theme.black};
			color: ${({ theme }) => theme.white};
			border: 1px solid ${({ theme }) => theme.white};
			padding: 1.5rem 2rem;

			:hover {
				background: ${({ theme }) => theme.white};
				color: ${({ theme }) => theme.black};
			}
			:disabled {
				cursor: not-allowed;
				color: ${({ theme }) => theme.grey800};
				border: 1px solid ${({ theme }) => theme.grey800};
				:hover {
					background: ${({ theme }) => theme.black};
					color: ${({ theme }) => theme.grey800};
				}
			}
		`}
`;

export const StyledNumber = styled.div`
	font-size: 3.3rem;
	line-height: 4rem;
	margin: 0 auto;
	display: flex;
	max-width: fit-content;
	justify-content: center;
	flex-direction: row;

	color: ${({ theme }) => theme.black};

	min-width: 11.5rem;

	${({ type }) => {
		switch (type) {
			case 'services':
				return css`
					margin-bottom: 1rem;
					color: ${({ theme }) => theme.white};
					font-size: 4.25rem;

					min-width: -webkit-fill-available;
					@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
						span {
							white-space: nowrap;
						}
					}
				`;
			case 'media':
				return css`
					margin-bottom: 1rem;
					color: ${({ theme }) => theme.black};
					font-size: 4.25rem;
				`;
			case 'result':
				return css`
					margin-bottom: 1.5rem;
				`;
			case 'influ':
				return css`
					margin-top: 0.7rem;
					margin-bottom: 1rem;
				`;
			default:
				return null;
		}
	}};

	${({ color }) =>
		color &&
		css`
			color: ${color};
		`}
`;

export const StyledAnimatedNumber = styled.div`
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
`;

export const StyledWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
`;

export const StyledText = styled.p`
	font-size: 1.125rem;
	max-width: 15.6rem;
	text-align: center;

	${({ type }) =>
		type === 'media' &&
		css`
			color: ${({ theme }) => theme.black};
		`}
`;

export const StyledNewsletterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}

	p {
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

export const StyledInput = styled.input`
	width: 100%;
	height: 3rem;
	padding: 1rem;
	background: transparent;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.white};
	text-align: left;
	font-size: 1.1rem;

	::placeholder {
		padding-left: 2rem;
		color: ${({ theme }) => theme.white};
		font-size: 1.1rem;
	}

	${({ error }) =>
		error &&
		css`
			border-bottom: 2px solid ${({ theme }) => theme.red};
			::placeholder {
				color: ${({ theme }) => theme.red};
			}
		`}
`;
export const StyledDescription = styled.p`
	margin: 0 auto;
	font-size: 1.125rem;
	max-width: 39.3rem;
	margin-top: 4.5rem;
	margin-bottom: 3.2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 1rem;
	}
	${({ type }) => {
		switch (type) {
			case 'list':
				return css`
					margin-top: 0rem;
					margin-bottom: 2rem;
				`;
			case 'careerItemMini':
				return css`
					margin-left: 0;
					margin-top: 1.125rem;
					margin-bottom: 2rem;
					font-size: 1.25rem;
					font-weight: ${({ theme }) => theme.light};
					@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
						padding: 0;
					}
				`;
			case 'offersCard':
				return css`
					margin-top: 1.7rem;
					margin-bottom: 2rem;
					color: ${({ theme }) => theme.black};
				`;
			case 'carrerSecond':
				return css`
					margin-top: 2rem;
					margin-bottom: 7rem;
					@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
						max-width: 20.6rem;
						margin-left: 0;
					}
				`;
			case 'career':
				return css`
					margin-top: 3rem;
					margin-bottom: 2rem;
					max-width: 28.5rem;
					margin-left: 0;

					@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
						max-width: 23rem;
					}
				`;
			case 'cta':
				return css`
					color: ${({ theme }) => theme.white};
					font-weight: ${({ theme }) => theme.light};
					margin: 0 auto;
					margin-bottom: 3rem;
				`;
			case 'aboutCta':
				return css`
					margin: 0 auto;
					color: ${({ theme }) => theme.black};
					margin-top: 4rem;
					max-width: 26rem;
					text-align: center;
				`;
			case 'aboutHeader':
				return css`
					margin: 0 auto;
					color: ${({ theme }) => theme.white};
					margin-top: 2.5rem;
					margin-bottom: 4rem;
					max-width: 40rem;
					text-align: center;
					@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
						padding: 0 1.5rem;
					}
				`;
			default:
				return null;
		}
	}}
`;

export const CategoryWrapper = styled.div`
	display: flex;

	flex-flow: row wrap;
`;
