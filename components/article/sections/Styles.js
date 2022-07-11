import styled, { css } from 'styled-components';

export const StyledHeaderImageWrapper = styled.div`
	width: 100%;
	height: 23.7rem;
	margin-bottom: 2rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const StyledArticleDate = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	text-align: center;

	* {
		font-size: 1rem;
		color: ${({ theme }) => theme.black};
	}

	${({ active }) =>
		active &&
		css`
			span {
				:before {
					content: ' , ';
				}
			}
		`}
`;

export const StyledContentWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 2rem;
	max-width: 48rem;
	margin: auto;
	padding: 1.5rem;
	padding-top: 3.5rem;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		padding: 0;
		padding-top: 3.5rem;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const StyledSocialsWrapper = styled.div`
	width: 100%;
	font-size: 1rem;
	color: ${({ theme }) => theme.grey500};
	display: flex;
	flex-flow: row nowrap;
	gap: 1.5rem;
	align-items: flex-end;

	img {
		width: 1.5rem;
		height: 1.25rem;
		object-fit: contain;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 17%;
		height: 100%;
		left: 0rem;
		flex-direction: column;
	}

	position: sticky;
	position: -webkit-sticky;
	top: 0;
`;

export const StyledContentContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-flow: column nowrap;
	position: relative;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 88%;
	}
`;

export const StyledContent = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column nowrap;

	p {
		margin-bottom: 1.9rem;
		img {
			margin: 1rem 0;
			width: 100%;
			height: 100%;
			max-height: 47.4rem;
		}
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 1rem;
	}

	* {
		color: ${({ theme }) => theme.black};

		strong {
			font-weight: ${({ theme }) => theme.bold};
		}
	}
`;
