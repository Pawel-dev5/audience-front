import styled from 'styled-components';
import HomeBackground from '../../../assets/homeBackground.jpg';

export const StyledMediaWrapper = styled.div`
	padding: 4rem 0;
`;

export const StyledBlogWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 7.5rem 0;

	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const StyledBlog = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-top: 6.4rem;
	width: 100%;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}
`;

export const StyledAuthorsWrapper = styled.div`
	width: 100%;
	padding-top: 0.5rem;
	padding-bottom: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 40%;
		padding-bottom: 0;
	}
`;

export const StyledCardWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.8rem;
	padding: 1rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 60%;
		flex-direction: row;
		align-items: flex-start;
	}
`;

export const StyledExpertHeader = styled.p`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.black};
	padding-bottom: 3.3rem;
`;

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 67.6rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-flow: column nowrap;
	background-image: url(${HomeBackground.src});
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
	font-weight: ${({ theme }) => theme.bold};
	color: ${({ theme }) => theme.white};
	text-decoration: underline;
	text-decoration-color: ${({ theme }) => theme.white};
	text-underline-offset: 0.5rem;
	text-decoration-thickness: 0.5rem;
	padding-top: 1rem;

	${({ color }) =>
		color &&
		css`
			text-decoration-color: ${color};
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding-top: 0;
		min-height: 13rem;
		padding-right: 2rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		text-underline-offset: 1.7rem;
		font-size: 4rem;
		min-height: 24rem;
		line-height: 6rem;
	}
`;

export const StyledListWrapper = styled.div`
	padding-bottom: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: transparent;

	width: 100%;
	max-width: 1100px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		border-left: 2px solid rgba(255, 255, 255, 0.3);
		margin-top: 2rem;
		padding-top: 2.5rem;
		padding-left: 4rem;
		min-height: 32.5rem;
		margin-left: 2.5rem;
	}
`;

export const StyledList = styled.ol`
	overflow: visible;
	min-height: 22.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6rem;
	justify-content: center;
	padding-top: 5rem;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		text-align: left;
		padding-top: 0rem;
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(1, 1fr);
		grid-auto-flow: column;
		column-gap: 5rem;
	}
`;

export const StyledSectionsWrapper = styled.div`
	width: 100%;
	margin-top: 2rem;
	margin-bottom: 8rem;
	display: flex;
	flex-direction: column;
	gap: 4.4rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		> div:nth-child(odd) {
			flex-direction: row-reverse;
		}
	}
`;
