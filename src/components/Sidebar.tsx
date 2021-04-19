import styled from 'styled-components';
import SidebarTop from './SidebarTop';
import SidebarWeatherResult from './SidebarWeatherResult';
import SearchWeather from './SearchWeather';
import { useState } from 'react';

const SidebarStyled = styled.aside`
	background-color: var(--bg-sidebar);
	grid-row: 1;
	display: flex;
	flex-direction: column;
`;

function Sidebar() {
	const [showSearch, setSearch] = useState(false);
	return (
		<SidebarStyled onClick={() => setSearch(true)}>
			<SidebarTop />
			<SidebarWeatherResult />
			{showSearch && <SearchWeather />}
		</SidebarStyled>
	);
}

export default Sidebar;
