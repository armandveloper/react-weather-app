import { useContext } from 'react';
import styled from 'styled-components';
import { TempUnits } from '../constants/temp-units';
import { WeatherContext } from '../context/WeatherContext';
import ButtonCircle from './ButtonCircle';

const UnitSwitchStyled = styled.header`
	margin-top: 4.2rem;
	padding: 0 2rem;
	display: none;
	align-items: center;
	justify-content: flex-end;
	@media (min-width: 56.25em) {
		display: flex;
	}
	@media (min-width: 75em) {
		padding: 0;
	}
	button:first-child {
		margin-right: 2.2rem;
	}
`;

function UnitSwitch() {
	const { tempUnit, changeToCelsius, changeToFahrenheit } = useContext(
		WeatherContext
	);

	return (
		<UnitSwitchStyled>
			<ButtonCircle
				size="lg"
				text="°C"
				variant={tempUnit === TempUnits.C ? 'light' : 'gray'}
				title="Switch to Celsius"
				onClick={changeToCelsius}
			/>
			<ButtonCircle
				size="lg"
				text="°F"
				variant={tempUnit === TempUnits.F ? 'light' : 'gray'}
				title="Switch to Fahrenheit"
				onClick={changeToFahrenheit}
			/>
		</UnitSwitchStyled>
	);
}

export default UnitSwitch;
