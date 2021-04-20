import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import Button from './Button';
import ButtonCircle from './ButtonCircle';

const SidebarTopStyled = styled.nav`
	padding: 1.8rem 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

function SidebarTop() {
	const { showSearchWeather } = useContext(WeatherContext);

	return (
		<SidebarTopStyled>
			<Button
				onClick={showSearchWeather}
				variant="gray"
				shadow={true}
				text="Search for places"
			/>
			<ButtonCircle variant="gray" title="Click" icon="gps_fixed" />
		</SidebarTopStyled>
	);
}

export default SidebarTop;
