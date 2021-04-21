import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';

const LocationListStyled = styled.ul`
	list-style: none;
	margin: 3.5rem 0 0;
	padding: 0;
	.location-item {
		border: 1px solid transparent;
		cursor: pointer;
		margin-bottom: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 1.2rem;
		span {
			opacity: 0;
		}
		&:hover {
			border-color: #616475;
			span {
				opacity: 1;
			}
		}
	}
`;

function LocationList() {
	const { locationResult } = useContext(WeatherContext);

	const { getWeather } = useContext(WeatherContext);

	return (
		<LocationListStyled className="location-list">
			{locationResult.map((item) => (
				<li
					onClick={() => getWeather(item.woeid)}
					key={item.woeid}
					className="location-item"
				>
					{item.title}
					<span className="material-icons">chevron_right</span>
				</li>
			))}
		</LocationListStyled>
	);
}

export default LocationList;
