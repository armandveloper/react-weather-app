import styled from 'styled-components';
import { spin } from '../animations';

interface LoaderProps {
	size?: number;
}

const LoaderStyled = styled.div<{ size: number }>`
	border-top: 0.2rem solid var(--color-text);
	border-radius: 50%;
	height: ${({ size }) => size + 'rem'};
	margin: auto;
	width: ${({ size }) => size + 'rem'};
	animation: ${spin} 0.6s linear infinite;
`;

function Loader({ size = 4 }: LoaderProps) {
	return <LoaderStyled size={size} role="status" aria-label="Loading..." />;
}

export default Loader;
