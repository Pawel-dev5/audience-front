import styled from 'styled-components';

export const StyledInputsWrapper = styled.div`
	display: flex;
	gap: 0.75rem;

	input {
		width: 50%;
	}
`;

export const StyledForm = styled.form`
	input,
	textarea {
		width: 100%;
		font-size: 1rem;
		color: ${({ theme }) => theme.grey700};
		padding-left: 2.25rem;
		height: 3.4rem;
		margin-bottom: 0.75rem;

		::placeholder {
			font-size: 1rem;
			color: ${({ theme }) => theme.grey600};
		}
	}

	textarea {
		height: 138px;
		padding-top: 1.8rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 1rem 2rem;
		padding-bottom: 3rem;
	}
`;

export const StyledDisc = styled.span`
	font-size: 0.56rem;
	line-height: 0.9rem;
	margin-left: 0.7rem;
`;

export const StyledCheckboxWrapper = styled.div`
	display: flex;
	padding-bottom: 2rem;

	input {
		min-width: 1rem;
		width: 1rem;
		min-height: 1rem;
		height: 1rem;
	}
`;

export const StyledError = styled.span`
	margin-top: 2rem;
	color: ${({ theme }) => theme.red};
`;

export const StyledSuccessWrapper = styled.div`
	* {
		color: ${({ theme }) => theme.white};
	}
`;
