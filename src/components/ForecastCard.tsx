import styled from 'styled-components';

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
		background: orangered;
	}
	.temperature-min-max {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.min {
		color: #a09fb1;
	}
`;

function ForecastCard() {
	return (
		<ForecastCardStyled>
			<h3 className="day">Tomorrow</h3>
			<div className="img" />
			<p className="temperature-min-max">
				<span className="max">16°C</span>
				<span className="min">11°C</span>
			</p>
		</ForecastCardStyled>
	);
}

export default ForecastCard;
