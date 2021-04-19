import styled from 'styled-components';

interface ButtonProps {
	text: string;
	variant?: string;
	shadow?: boolean;
}

const ButtonStyled = styled.button<{ variant: string; shadow: boolean }>`
	background-color: ${({ variant }) =>
		variant === 'blue' ? 'var(--color-blue)' : 'var(--color-gray)'};
	border: none;
	box-shadow: ${({ shadow }) => shadow && '0px 4px 4px rgba(0, 0, 0, 0.25);'};
	color: inherit;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	font-weight: 500;
	margin: 0;
	padding: 1rem 1.8rem;
	&:focus {
		outline: none;
	}
`;

function Button({ text, variant = 'blue', shadow = false }: ButtonProps) {
	return (
		<ButtonStyled variant={variant} shadow={shadow}>
			{text}
		</ButtonStyled>
	);
}

export default Button;
