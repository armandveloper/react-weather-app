import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import Forecast from './Forecast';
import Loader from './Loader';
import TodayHightlights from './TodayHightlights';
import UnitSwitch from './UnitSwitch';

const MainWeatherStyled = styled.main`
	width: 100%;
	overflow-y: auto;
	.wrapper {
		margin: 0 auto;
		max-width: 80rem;
		width: 100%;
		@media (min-width: 75em) {
			padding: 0 2rem;
		}
		@media (min-width: 85em) {
			padding: 0;
		}
	}
	.center {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

function MainWeather() {
	const { isLoading } = useContext(WeatherContext);

	return (
		<MainWeatherStyled>
			{isLoading ? (
				<div className="center">
					<Loader />
				</div>
			) : (
				<div className="wrapper">
					<UnitSwitch />
					<Forecast />
					<TodayHightlights />
				</div>
			)}
		</MainWeatherStyled>
	);
}

export default MainWeather;
