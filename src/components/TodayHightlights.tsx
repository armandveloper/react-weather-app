import { useContext } from 'react';
import styled from 'styled-components';
import { cardinalDirections } from '../constants/cardinal-directions';
import { WeatherContext } from '../context/WeatherContext';

const TodayHightlightsStyled = styled.section`
	margin-top: 5rem;
	margin-bottom: 4rem;
	padding: 0 2rem;
	@media (min-width: 75em) {
		padding: 0;
	}
	.headline {
		font-size: 3.2rem;
		margin: 0 0 3.2rem;
	}
	.grid {
		display: grid;
		gap: 3.2rem;
		@media (min-width: 37.5em) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (min-width: 75em) {
			gap: 4.8rem;
		}
	}
	.hightlight {
		background-color: var(--bg-sidebar);
		padding: 2.2rem;
		text-align: center;
	}
	.hightlight-name {
		font-size: 1.6rem;
		font-weight: 500;
		margin: 0;
		text-transform: capitalize;
	}
	.hightlight-result {
		font-size: 6.4rem;
		font-weight: 700;
		margin: 1rem 0;
		span {
			font-size: 3.6rem;
			font-weight: 500;
		}
	}
	.progress-bar {
		.percentage {
			color: #a09fb1;
			font-size: 1.2rem;
			font-weight: 700;
			margin-bottom: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.percentage-sign {
			color: #a09fb1;
			font-size: 1.2rem;
			font-weight: 700;
			margin-top: 0.5rem;
			text-align: right;
		}
	}
	.bar {
		background-color: var(--color-text);
		border-radius: 0.8rem;
		height: 0.8rem;
		.progress {
			background-color: var(--color-yellow);
			border-radius: 0.8rem;
			height: 100%;
			width: 0;
			transition: width 0.3s linear;
		}
	}
	.hightlight-extra {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.circle {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		height: 3rem;
		margin-right: 0.6rem;
		user-select: none;
		width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s ease;
		span.material-icons {
			font-size: 2rem;
		}
	}
`;

function TodayHightlights() {
	const { weather } = useContext(WeatherContext);

	if (!weather) return null;

	const [weatherToday] = weather.consolidated_weather;

	const deg = cardinalDirections.get(weatherToday.wind_direction_compass);

	return (
		<TodayHightlightsStyled>
			<h2 className="headline">Today's Hightlights</h2>
			<div className="grid">
				<div className="hightlight">
					<h3 className="hightlight-name">Wind status</h3>
					<p className="hightlight-result">
						{~~weatherToday.wind_speed} <span>mph</span>
					</p>
					<div className="hightlight-extra">
						<div
							className="circle"
							style={{
								transform: `rotate(${deg}deg)`,
							}}
						>
							<span className="material-icons">navigation</span>
						</div>
						{weatherToday.wind_direction_compass}
					</div>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Humidity</h4>
					<p className="hightlight-result">
						{~~weatherToday.humidity} <span>%</span>
					</p>
					<div className="progress-bar">
						<div className="percentage">
							<span>0</span>
							<span>50</span>
							<span>100</span>
						</div>
						<div className="bar">
							<div
								className="progress"
								style={{ width: ~~weatherToday.humidity + '%' }}
							></div>
						</div>
						<div className="percentage-sign">%</div>
					</div>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Visibility</h4>
					<p className="hightlight-result">
						{~~weatherToday.visibility} <span>miles</span>
					</p>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Air Pressure</h4>
					<p className="hightlight-result">
						{~~weatherToday.air_pressure} <span>mb</span>
					</p>
				</div>
			</div>
		</TodayHightlightsStyled>
	);
}

export default TodayHightlights;
