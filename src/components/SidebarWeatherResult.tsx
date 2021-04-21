import { useContext } from 'react';
import styled from 'styled-components';
import { TempUnits } from '../constants/temp-units';
import { WeatherContext } from '../context/WeatherContext';
import { formatDate } from '../helpers/date';
import { celsiusToFahrehheit } from '../helpers/temp-units';
import cloudsBg from '../assets/img/clouds-bg.png';

const SidebarWeatherResultStyled = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.bg {
		background-image: url(${cloudsBg});
		background-repeat: no-repeat;
		background-size: 120%;
		background-position: -30px 0;
		opacity: 0.05;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	> *:not(:first-child) {
		position: relative;
	}
	.img {
		height: 17.4rem;
		width: 15rem;
		margin: 0 auto;
	}
	.temperature {
		font-size: 14.4rem;
		font-weight: 500;
		margin: 0;
		@media (min-width: 75em) {
			margin: 4rem 0;
		}
	}
	.temperature-unit {
		color: #a09fb1;
		font-size: 4.8rem;
		margin-left: 0.5rem;
	}
	.weather-description {
		color: #a09fb1;
		font-size: 3.6rem;
		font-weight: 600;
		margin: 1.5rem 0;
		@media (min-width: 75em) {
			margin-bottom: 5rem;
		}
	}
	.weather-meta {
		color: #88869d;
		font-size: 1.8rem;
		font-weight: 500;
		margin: 0;
		&:last-child {
			margin-top: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			@media (min-width: 75em) {
				margin-top: 3rem;
			}
		}
	}
`;

function SidebarWeatherResult() {
	const { weather, tempUnit } = useContext(WeatherContext);

	if (!weather) return null;
	const [weatherToday] = weather.consolidated_weather;

	return (
		<SidebarWeatherResultStyled>
			<div className="bg" />
			<img
				src={`https://www.metaweather.com/static/img/weather/${weatherToday.weather_state_abbr}.svg`}
				alt={weatherToday.weather_state_name}
				className="img"
			/>
			<h1 className="temperature">
				{tempUnit === TempUnits.F
					? ~~celsiusToFahrehheit(~~weatherToday.the_temp)
					: ~~weatherToday.the_temp}
				<span className="temperature-unit">
					{tempUnit === TempUnits.F ? '°F' : '°C'}
				</span>
			</h1>
			<h2 className="weather-description">
				{weatherToday.weather_state_name}
			</h2>
			<p className="weather-meta">Today - {formatDate(weather.time)}</p>
			<p className="weather-meta">
				<span className="material-icons">location_on</span>
				{weather.title}
			</p>
		</SidebarWeatherResultStyled>
	);
}

export default SidebarWeatherResult;
