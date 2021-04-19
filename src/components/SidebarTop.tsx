import styled from 'styled-components';
import Button from './Button';
import ButtonCircle from './ButtonCircle';

const SidebarTopStyled = styled.nav`
	padding: 1.8rem 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

function SidebarTop() {
	return (
		<SidebarTopStyled>
			<Button variant="gray" shadow={true} text="Search for places" />
			<ButtonCircle variant="gray" title="Click" icon="gps_fixed" />
		</SidebarTopStyled>
	);
}

export default SidebarTop;
