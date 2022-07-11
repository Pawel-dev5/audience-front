import styled from 'styled-components';

export const StyledCareerItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 1090px;
	margin: 0 auto;
	margin-bottom: 12rem;

	* {
		color: ${({ theme }) => theme.black};
	}
`;

export const StyledItemBackWrapper = styled.div`
	text-align: left;
	width: 100%;
	padding-top: 4.2rem;
	padding-bottom: 1.6rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.black};
		font-size: 1.5rem;
		margin-left: 0.6rem;
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 90%;
	}
`;

export const StyledContentWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 2rem;
	margin: auto;
	padding-top: 3.5rem;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 1.5rem;
		padding: 0;
		padding-top: 3.5rem;
		justify-content: center;
		align-items: flex-start;
	}

	* {
		font-size: 1.125rem;
	}
`;

export const StyledCarrerItem = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 1rem;
	padding: 1rem 0rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 3rem;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
	}
`;

export const StyledFormWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 30%;
	max-width: 400px;
	height: 100%;
	${({ theme }) => theme.shadow};
	padding: 4rem 2rem;

	* {
		text-align: left;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 90%;
		max-width: 100%;
	}
`;

export const StyledCareer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 70%;
	max-width: 675px;
	height: 100%;
	${({ theme }) => theme.shadow};
	padding: 4rem 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 90%;
	}
`;

export const StyledDisclaimer = styled.span`
	font-size: 0.5rem;
`;

export const StyledFormHeader = styled.div`
	font-size: 1.125rem;
	font-weight: ${({ theme }) => theme.light};
	margin-bottom: 3.3rem;
`;

export const StyledCheckbox = styled.input`
	min-width: 0.7rem;
	min-height: 0.7rem;
	background: ${({ theme }) => theme.black};
	border: 1px solid ${({ theme }) => theme.white};
	margin-right: 0.6rem;
`;

export const StyledDicsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 2.2rem;
`;

export const StyledTextArea = styled.textarea`
	height: 61px;
	width: 100%;
	font-size: 0.9rem;
	margin-top: 1rem;
	padding: 0.5rem;

	::placeholder {
		font-size: 0.9rem;
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.125rem;

	button {
		margin-left: 0;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	height: 33px;
	font-size: 0.9rem;
	padding: 0.5rem;

	::placeholder {
		font-size: 0.9rem;
	}
`;
