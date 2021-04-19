import styled from 'styled-components';

interface ButtonCircleProps {
	text?: string;
	title?: string;
	icon?: string;
	variant?: string;
}

const ButtonCircleStyled = styled.button.attrs<{ title: string }>((props) => ({
	title: props.title,
}))<{ variant: string }>`
	background-color: ${({ variant }) =>
		variant === 'gray'
			? 'rgba(110, 112, 122, 0.3)'
			: variant === 'light'
			? '#110E3C'
			: 'var(--color-blue)'};
	border-radius: 50%;
	border: none;
	color: ${({ variant }) => (variant === 'light' ? '#110E3C' : '#E7E7EB')};
	cursor: pointer;
	height: 4rem;
	width: 4rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	&:focus {
		outline: none;
	}
`;

function ButtonCircle({
	text,
	title,
	icon,
	variant = 'blue',
}: ButtonCircleProps) {
	return (
		<ButtonCircleStyled variant={variant} title={title}>
			{text}
			{icon && <span className="material-icons">{icon}</span>}
		</ButtonCircleStyled>
	);
}

export default ButtonCircle;
