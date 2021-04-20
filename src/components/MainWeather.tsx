import styled from 'styled-components';
import Forecast from './Forecast';
import TodayHightlights from './TodayHightlights';
import UnitSwitch from './UnitSwitch';

const MainWeatherStyled = styled.main`
	width: 100%;
	overflow-y: auto;
	scrollbar-color: var(--color-blue) var(--color-text);
	scrollbar-width: thin;
	&::-webkit-scrollbar {
		border-radius: 1rem;
		width: 0.5rem;
		height: 2rem;
	}
	&::-webkit-scrollbar-track {
		background-color: var(--color-text);
	}
	&::-webkit-scrollbar-thumb {
		background-color: var(--color-blue);
		border-radius: 1rem;
	}
	.wrapper {
		margin: 0 auto;
		max-width: 70.4rem;
		width: 100%;
	}
`;

function MainWeather() {
	return (
		<MainWeatherStyled>
			<div className="wrapper">
				<UnitSwitch />
				<Forecast />
				<TodayHightlights />
			</div>
		</MainWeatherStyled>
	);
}

export default MainWeather;
