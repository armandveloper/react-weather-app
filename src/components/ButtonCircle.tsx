import styled from 'styled-components';

interface ButtonCircleProps {
	text?: string;
	title?: string;
	icon?: string;
	variant?: string;
	size?: string;
	onClick?(): void;
}

const ButtonCircleStyled = styled.button.attrs<{ title: string }>((props) => ({
	title: props.title,
}))<{ variant: string; size: string }>`
	background-color: ${({ variant }) =>
		variant === 'gray'
			? 'rgba(110, 112, 122, 0.3)'
			: variant === 'light'
			? 'var(--color-text)'
			: 'var(--color-blue)'};
	border-radius: 50%;
	border: none;
	color: ${({ variant }) => (variant === 'light' ? '#110E3C' : '#E7E7EB')};
	cursor: pointer;
	font-family: inherit;
	font-size: ${({ size }) => (size === 'lg' ? '1.8rem' : '1.6rem')};
	font-weight: ${({ size }) => (size === 'lg' ? '700' : '500')};
	height: 4rem;
	width: 4rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: background 0.3s ease, color 0.3s ease;
	&:focus {
		outline: none;
	}
`;

function ButtonCircle({
	text,
	title,
	icon,
	variant = 'blue',
	size = 'normal',
	onClick,
}: ButtonCircleProps) {
	return (
		<ButtonCircleStyled
			onClick={onClick}
			size={size}
			variant={variant}
			title={title}
		>
			{text}
			{icon && <span className="material-icons">{icon}</span>}
		</ButtonCircleStyled>
	);
}

export default ButtonCircle;
