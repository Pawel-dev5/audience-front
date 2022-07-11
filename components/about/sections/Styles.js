import styled from 'styled-components';

export const StyledMediaCtaWrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 6rem 0;
	gap: 4rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 0;
		padding: 4rem 0;
		flex-direction: row;

		> div {
			width: 50%;
		}
	}
`;

export const StyledMediaImageWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	img {
		max-width: 100%;
		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			min-width: 90%;
			max-width: 90%;
			margin-right: -10px;
		}
	}
`;

export const StyledLine = styled.div`
	position: absolute;
	margin: 0 auto;
	background: ${({ theme }) => theme.grey900};
	max-width: 20%;
	height: 1px;

	display: none;
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: block;
		left: 47%;
		top: 9rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		left: 45%;
		top: 13rem;
	}
`;

export const StyledTeamWrapper = styled.div`
	height: fit-content;
	padding-top: 4rem;
	padding-bottom: 6rem;
`;

export const StyledTeamList = styled.div`
	margin: 0 auto;
	width: 90%;
	padding: 1rem;
	padding-top: 4rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;
	flex-flow: row wrap;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 4rem;
		width: 75%;
	}
`;
