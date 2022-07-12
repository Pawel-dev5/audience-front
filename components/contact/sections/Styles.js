import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-height: 684px;
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
	margin-top: 152px;
	margin-bottom: 148px;

	iframe {
		margin-right: 128px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 50px;
		flex-direction: column-reverse;
		align-items: center;
		iframe {
			width: 90%;
			margin-top: 50px;
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
	gap: 147px;
	margin-top: 84px;
	margin-bottom: 151px;

	* {
		color: ${({ theme }) => theme.black};
		font-weight: ${({ theme }) => theme.light};
	}

	p {
		font-weight: ${({ theme }) => theme.bold};
	}

	:first-child {
		max-width: 224px;
	}
	> div:nth-child(2) {
		max-width: 446px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
		gap: 47px;
		width: 90%;

		:first-child {
			max-width: 100%;
		}
		> div:nth-child(2) {
			max-width: 100%;
		}
	}
`;

export const StyledSections = styled.div`
	display: flex;
	flex-direction: column;
`;
