import styled, { css } from 'styled-components';

export const StyledCardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	gap: 1rem;
	padding: 1.5rem;
	text-align: center;
	hr {
		background: ${({ theme }) => theme.black};
		width: 4rem;
		height: 2px;
	}
`;

export const StyledCSCardContent = styled(StyledCardContent)`
	margin-top: 2rem;
	justify-content: space-between;
	height: 55%;
`;

export const StyledMediaCardContent = styled(StyledCardContent)`
	justify-content: space-between;
	height: 65%;
	padding-top: 0;
`;

export const StyledCard = styled.div`
	cursor: pointer;
	width: 100%;
	height: 28.75rem;
	box-shadow: rgb(112 112 112 / 20%) 0px 5px 15px;
	transition: all 0.5s;
	margin: 0 auto;
	z-index: 100;

	* {
		color: ${({ theme }) => theme.black};
	}

	:hover {
		transform: scale(1.05);
	}
`;
export const StyledMediaCard = styled(StyledCard)`
	height: 25rem;

	:hover {
		text-decoration: none;
	}
`;

export const StyledCardImage = styled.div`
	height: 8rem;

	img {
		width: 100%;
		height: 8rem;
		object-fit: cover;
	}

	${({ type }) =>
		type === 'media' &&
		css`
			width: 50%;
			margin: 0 auto;

			img {
				object-fit: contain;
			}
		`}
`;

export const StyledMediaCardImage = styled.div`
	height: 8rem;
	width: 50%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 8rem;
		max-height: 3.75rem;
		object-fit: contain;
	}
`;

export const StyledCardTitle = styled.span`
	font-size: 1.25rem;
`;

export const StyledCSCardTitle = styled(StyledCardTitle)`
	font-size: 1.25rem;
	font-weight: ${({ theme }) => theme.bold};
`;

export const StyledCardAuthor = styled.span`
	font-size: 1rem;
	span {
		:after {
			content: ', ';
		}
	}
`;

export const StyledCardDesc = styled.span`
	margin: 0 auto;
	font-size: 1rem;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;

export const StyledCSCardDesc = styled(StyledCardDesc)`
	max-width: 20rem;
	margin-top: 1rem;
`;
export const StyledMediaCardDesc = styled(StyledCardDesc)`
	max-width: 20rem;
	margin-top: 1rem;
	padding-top: 0;
`;

export const StyledButton = styled.a`
	text-decoration: none;
	text-align: center;
	align-items: center;
	display: flex;
	max-height: 2.3rem;
	width: 6.8rem;
	cursor: pointer;
	font-size: 1.1rem;
	margin-right: 1rem;
	padding: 0.7rem;
	color: ${({ theme }) => theme.black};
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.black};
`;
