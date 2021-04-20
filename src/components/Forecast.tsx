import styled from 'styled-components';
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
	return (
		<ForecastStyled>
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
		</ForecastStyled>
	);
}

export default Forecast;
