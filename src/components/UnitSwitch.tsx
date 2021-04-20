import styled from 'styled-components';
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
	return (
		<UnitSwitchStyled>
			<ButtonCircle
				size="lg"
				text="°C"
				variant="light"
				title="Switch to Celsius"
			/>
			<ButtonCircle
				size="lg"
				text="°F"
				variant="gray"
				title="Switch to Fahrenheit"
			/>
		</UnitSwitchStyled>
	);
}

export default UnitSwitch;
