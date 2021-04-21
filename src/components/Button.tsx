import styled from 'styled-components';
import Loader from './Loader';

interface ButtonProps {
	text: string;
	variant?: string;
	shadow?: boolean;
	disabled?: boolean;
	loading?: boolean;
	onClick?(): void;
}

const ButtonStyled = styled.button<{
	variant: string;
	shadow: boolean;
}>`
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
	transition: opacity 0.3s ease;
	&:focus {
		outline: none;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

function Button({
	onClick,
	text,
	variant = 'blue',
	shadow = false,
	disabled = false,
	loading = false,
}: ButtonProps) {
	return (
		<ButtonStyled
			onClick={onClick}
			variant={variant}
			shadow={shadow}
			disabled={disabled || loading}
		>
			{loading ? <Loader size={1.5} /> : text}
		</ButtonStyled>
	);
}

export default Button;
