import { useContext } from 'react';
import styled from 'styled-components';
import { TempUnits } from '../constants/temp-units';
import { WeatherContext } from '../context/WeatherContext';
import { formatDate } from '../helpers/date';
import { celsiusToFahrehheit } from '../helpers/temp-units';
import { ConsolidatedWeather } from '../interfaces/weather-result';

interface ForecastCardProps {
	weather: ConsolidatedWeather;
	index: number;
}

const ForecastCardStyled = styled.li`
	background-color: var(--bg-sidebar);
	padding: 2rem;
	text-align: center;
	.day {
		font-size: 1.6rem;
		font-weight: 500;
		margin: 0;
	}
	.img {
		display: block;
		margin: 1rem auto 4rem;
		height: 6.2rem;
		width: 5.6rem;
	}
	.temperature-min-max {
		max-width: 12rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.min {
		color: #a09fb1;
	}
`;

function ForecastCard({ weather, index }: ForecastCardProps) {
	const { tempUnit } = useContext(WeatherContext);

	return (
		<ForecastCardStyled>
			<h3 className="day">
				{index === 0 ? 'Tomorrow' : formatDate(weather.applicable_date)}
			</h3>
			<img
				src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
				alt={weather.weather_state_name}
				className="img"
			/>
			<p className="temperature-min-max">
				<span className="max">
					{tempUnit === TempUnits.F
						? ~~celsiusToFahrehheit(~~weather.max_temp)
						: ~~weather.max_temp}
					{tempUnit === TempUnits.F ? '°F' : '°C'}
				</span>
				<span className="min">
					{tempUnit === TempUnits.F
						? ~~celsiusToFahrehheit(~~weather.min_temp)
						: ~~weather.min_temp}
					{tempUnit === TempUnits.F ? '°F' : '°C'}
				</span>
			</p>
		</ForecastCardStyled>
	);
}

export default ForecastCard;
