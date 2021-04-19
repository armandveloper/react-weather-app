import styled from 'styled-components';

const SidebarWeatherResultStyled = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.icon {
		height: 17.4rem;
		width: 15rem;
		margin: 0 auto;
		background-color: tomato;
	}
	.temperature {
		font-size: 14.4rem;
		font-weight: 500;
		margin: 0;
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
		}
	}
`;

function SidebarWeatherResult() {
	return (
		<SidebarWeatherResultStyled>
			<div className="icon" />
			<h1 className="temperature">
				15<span className="temperature-unit">°C</span>
			</h1>
			<h2 className="weather-description">Shower</h2>
			<p className="weather-meta">Today - Mon, 19 Apr</p>
			<p className="weather-meta">
				<span className="material-icons">location_on</span>
				Helsinki
			</p>
		</SidebarWeatherResultStyled>
	);
}

export default SidebarWeatherResult;
