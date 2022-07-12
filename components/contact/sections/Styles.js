import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-height: 43.4rem;
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

export const StyledMapBlockWrapper = styled.div`
	max-width: 1123px;
	margin: 0 auto;
	display: flex;
	margin-top: 9.5rem;
	margin-bottom: 9.25rem;

	iframe {
		margin-right: 8rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 3.1rem;
		flex-direction: column-reverse;
		align-items: center;
		* {
			text-align: center;
		}
		iframe {
			width: 90%;
			margin-top: 3.1rem;
			margin-right: 0;
		}
	}
`;

export const StyledBiuroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: center;

	* {
		color: ${({ theme }) => theme.black};
	}
`;

export const StyledAdressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	* {
		font-size: 1.125rem;
		:first-child {
			font-weight: ${({ theme }) => theme.bold};
		}
	}
`;

export const StyledContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	margin-top: 2rem;
	* {
		font-size: 1.125rem;
	}
`;

export const StyledRegisterWrapper = styled.div`
	max-width: 1123px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 9.2rem;
	margin-top: 5.25rem;
	margin-bottom: 9.4rem;

	* {
		color: ${({ theme }) => theme.black};
		font-weight: ${({ theme }) => theme.light};
	}

	p {
		font-weight: ${({ theme }) => theme.bold};
	}

	:first-child {
		max-width: 14rem;
	}
	> div:nth-child(2) {
		max-width: 27.8rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2.9rem;
		width: 90%;

		:first-child {
			max-width: 100%;
		}
		> div:nth-child(2) {
			max-width: 80%;
		}
	}
`;

export const StyledSections = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledBlocksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	gap: 3.5rem;
	max-width: 90%;
	margin: 0 auto;
	padding: 2rem 0;
	margin-bottom: 6.8rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	width: 95%;
	${({ theme }) => theme.shadow};
	padding: 1rem 2rem;

	img {
		max-width: 17.4rem;
		width: 100%;
		height: 2.2rem;
		object-fit: contain;
		margin-top: 2rem;
		margin-bottom: 1.5rem;
	}

	hr {
		height: 2px;
		width: 4.1rem;
		background: ${({ theme }) => theme.black};
		margin-bottom: 2.2rem;
	}

	* {
		color: ${({ theme }) => theme.black};
	}

	position: relative;
	overflow: visible;
	z-index: 100;

	:not(:last-child) {
		:after {
			content: '';
			height: 3.4rem;
			display: block;
			position: absolute;
			width: 1px;
			background: rgb(185, 185, 185);
			bottom: -3.4rem;
			left: 50%;
			transform: translate(-50%);
			z-index: 50;
		}
	}

	${({ type }) =>
		type === 'desktop' &&
		css`
			:not(:last-child) {
				:after {
					height: 6.25rem;
					bottom: -6.25rem;
				}
			}
		`}
`;

export const StyledLinkWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 2rem;
	margin-right: 1rem;
	z-index: 100;
	a {
		color: #575757;
	}

	img {
		width: 4.5rem;
		height: 0.8rem;
		object-fit: cover;
		margin-top: 0.5rem;
	}
`;

export const StyledDesktopBlocksWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem 2rem;
	position: relative;
	padding-top: 0.2rem;
	z-index: 100;
`;

export const StyledBorderDiv = styled.div`
	height: 2.8rem;
	display: block;
	width: 49.6rem;
	border: 2px solid rgb(185, 185, 185);
	border-bottom: 0;
	margin-top: 3.5rem;
	margin-bottom: -4px;
	z-index: 0;
`;

export const StyledDesktopBlocks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	max-width: 90%;
	margin: 0 auto;
	padding: 2rem 0;
	margin-bottom: 13rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledDesktopBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	${({ theme }) => theme.shadow};
	padding: 1rem 2rem;
	padding-bottom: 3rem;
	height: 31.2rem;

	img:first-child {
		max-width: 17.4rem;
		width: 100%;
		height: 2.2rem;
		object-fit: contain;
		margin-top: 2rem;
		margin-bottom: 1.5rem;
	}

	hr {
		height: 2px;
		width: 4.1rem;
		background: ${({ theme }) => theme.black};
		margin-bottom: 2.2rem;
	}

	* {
		color: ${({ theme }) => theme.black};
	}
`;
