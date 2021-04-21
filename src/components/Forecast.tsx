import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
import ForecastCard from './ForecastCard';

const ForecastStyled = styled.ul`
	list-style: none;
	margin: 5rem 0 0;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 3.2rem 2.6rem;
	@media (min-width: 75em) {
		padding: 0;
		grid-template-columns: repeat(5, 1fr);
	}
`;

function Forecast() {
	const { weather } = useContext(WeatherContext);

	const forecast = weather?.consolidated_weather.slice(1);

	return (
		<ForecastStyled>
			{forecast?.map((weather, i) => (
				<ForecastCard key={weather.id} weather={weather} index={i} />
			))}
		</ForecastStyled>
	);
}

export default Forecast;
