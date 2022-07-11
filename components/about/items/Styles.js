import styled, { css } from 'styled-components';

export const StyledTeamCard = styled.div`
	padding-top: 3rem;
	width: 100%;
	height: auto;
	transition: all 0.5s ease 0s;
	max-width: 55.25rem;
	${({ theme }) => theme.shadow};
	padding-bottom: 3rem;
	min-height: 26.12rem;

	${({ active }) =>
		!active &&
		css`
			max-width: 25.75rem;
			max-height: 26.12rem;
		`}
`;

export const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 2rem;
	max-height: 30%;
	min-width: 90%;
	border-bottom: 2px solid ${({ theme }) => theme.grey300};
`;

export const StyledHeaderText = styled.div`
	display: flex;
	align-items: flex-start;
	flex-flow: column nowrap;
	height: 100%;
	padding-left: 2rem;
	padding-bottom: 2.5rem;
`;

export const StyledHeaderImage = styled.div`
	height: 100%;
	img {
		min-height: 6.9rem;
		object-fit: contain;
	}
`;

export const StyledName = styled.p`
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.bold};
`;

export const StyledDescWrapper = styled.div`
	padding: 1.5rem 3rem;
	min-height: 12rem;
	display: flex;
	align-items: flex-start;
	flex-flow: column nowrap;
	text-align: center;
	gap: 2.5rem;
	justify-content: space-between;
`;
