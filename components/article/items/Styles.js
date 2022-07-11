import styled from 'styled-components';

export const StyledCategoryTitle = styled.span`
	font-size: 1.2rem;
	margin-right: 1rem;
`;

export const StyledFiltersWrapper = styled.div`
	width: fit-content;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap;
	gap: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const StyledFooterWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	gap: 1rem;
	max-width: 38.5rem;
	padding-top: 1rem;
	width: 100%;
	border-bottom: 2px solid ${({ theme }) => theme.grey300};
`;

export const StyledAuthorWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 65%;
	}

	* {
		font-size: 1.05rem;
		color: ${({ theme }) => theme.black};
	}

	div {
		width: 90%;
	}

	> img {
		width: 100%;
		object-fit: contain;
		max-width: 4rem;
		margin-left: 0.5rem;
	}
`;

export const StyledAuthorName = styled.p`
	font-weight: ${({ theme }) => theme.bold};
`;

export const StyledIn = styled.img`
	width: 1rem;
	height: 1rem;
	object-fit: contain;
	margin-top: 0.4rem;
	margin-bottom: 1rem;
`;
export const StyledEmail = styled.p`
	font-weight: ${({ theme }) => theme.light};
	font-size: 1rem;
	margin-top: 0.7rem;
`;
