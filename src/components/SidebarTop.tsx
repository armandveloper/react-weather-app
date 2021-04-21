import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import { getCurrentPosition } from '../helpers/geolocation';
import Button from './Button';
import ButtonCircle from './ButtonCircle';

const SidebarTopStyled = styled.nav`
	padding: 1.8rem 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

function SidebarTop() {
	const { showSearchWeather, searchLocationByCoords } = useContext(
		WeatherContext
	);

	const handleClick = () => {
		getCurrentPosition().then(({ lat, lng }) => {
			searchLocationByCoords(lat, lng);
		});
	};

	return (
		<SidebarTopStyled>
			<Button
				onClick={showSearchWeather}
				variant="gray"
				shadow={true}
				text="Search for places"
			/>
			{window.navigator.geolocation && (
				<ButtonCircle
					onClick={handleClick}
					variant="gray"
					title="Get weather of my current location"
					icon="gps_fixed"
				/>
			)}
		</SidebarTopStyled>
	);
}

export default SidebarTop;
