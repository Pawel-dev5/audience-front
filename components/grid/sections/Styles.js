import styled, { css } from 'styled-components';

// GRID
export const StyledGridWrapper = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 9rem;
	margin-top: 2rem;
	width: 100%;
	position: relative;

	${({ type }) =>
		type === 'media' &&
		css`
			margin-bottom: 2rem;
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		width: 82%;
		margin: auto;
		margin-bottom: 9rem;
		margin-top: 2.5rem;

		${({ type }) =>
			type === 'caseStudy' &&
			css`
				grid-template-columns: repeat(2, 1fr);
				width: 80%;
				max-width: 50rem;
				gap: 3.7rem;
			`}

		${({ type }) =>
			type === 'caseStudies' &&
			css`
				gap: 3rem;
			`}

    ${({ type }) =>
			type === 'media' &&
			css`
				margin-bottom: 1rem;
			`}
	}
`;

export const StyledCategoryTitle = styled.span`
	font-size: 1.2rem;
`;

export const StyledFiltersWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin: 0px auto;
	max-width: 1000px;
	gap: 1rem;

	box-sizing: border-box;
`;

export const StyledPaginationWrapper = styled.div`
	display: flex;
	width: 79%;
	> div {
		width: fit-content;
		display: flex;
		margin: 0 auto;
		margin-right: 0;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
	margin-bottom: 7rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		justify-content: flex-end;
	}
`;

export const StyledPaginationArrow = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	width: 2.5rem;
	height: 100%;
	min-height: 2.3rem;

	:hover {
		border: 1px solid ${({ theme }) => theme.black};
	}

	svg {
		min-height: 1.125rem;
		color: ${({ theme }) => theme.black};
	}
`;
