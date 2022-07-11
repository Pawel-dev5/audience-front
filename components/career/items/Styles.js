import styled, { css } from 'styled-components';

export const StyledLine = styled.div`
	position: absolute;
	height: 1px;
	width: 17%;
	min-width: 17.8rem;
	top: 4.5rem;
	left: 45%;
	background: ${({ theme }) => theme.grey900};
	z-index: 1000;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}

	${({ type }) =>
		type === 'secondCta' &&
		css`
			width: 10%;
			min-width: 17.8rem;
			left: 37%;
		`}
`;
