import styled from 'styled-components';

export const StyledLogosWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	margin-bottom: 3.5rem;
	max-width: 890px;

	img {
		width: 30%;
		height: 100%;
		max-width: 208px;
		max-height: 65px;
		object-fit: contain;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 1rem;
	}
`;

export const StyledOl = styled.div`
	margin-top: 3.7rem;
	max-width: 950px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 1rem;
	}
`;

export const StyledLine = styled.div`
	background: #707070;
	min-width: 160px;
	height: 2px;
	margin-left: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const StyledListWrapepr = styled.div`
	display: flex;
`;

export const StyledItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledLineWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 20px;
	span {
		min-width: 30px;
		font-size: 1.125rem;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		span {
			margin-top: 5px;
		}
	}
`;

export const StyledTextWrapper = styled.div`
	width: fit-content;
	margin-left: 1rem;
	font-size: 1.06rem;
`;

export const StyledMainHeader = styled.p`
	font-weight: ${({ theme }) => theme.bold};
	margin-bottom: 3.4rem;
	cursor: pointer;
`;

export const StyledContent = styled.div`
	margin-bottom: 7.5rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	hr {
		margin: 1rem 0;
		width: 63px;
		height: 2px;
		background: ${({ theme }) => theme.black};
	}
`;

export const StyledTitle = styled.p`
	font-weight: ${({ theme }) => theme.bold};
	margin-top: 2.5rem;
`;
