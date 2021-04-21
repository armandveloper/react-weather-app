import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import SidebarTop from './SidebarTop';
import SidebarWeatherResult from './SidebarWeatherResult';
import SearchWeather from './SearchWeather';
import Loader from './Loader';

const SidebarStyled = styled.aside`
	background-color: var(--bg-sidebar);
	min-height: 100vh;
	grid-row: 1;
	display: flex;
	flex-direction: column;
	@media (min-width: 56.25em) {
		height: 100vh;
	}
`;

function Sidebar() {
	const { isSearching, isLoading } = useContext(WeatherContext);

	return (
		<SidebarStyled>
			<SidebarTop />
			{isLoading ? <Loader /> : <SidebarWeatherResult />}
			<SearchWeather show={isSearching} />
		</SidebarStyled>
	);
}

export default Sidebar;
