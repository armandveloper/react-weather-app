import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const WeatherFormStyled = styled.form`
	height: 4.8rem;
	margin-top: 3rem;
	display: grid;
	grid-template-columns: 1fr 8.6rem;
	gap: 1.2rem;
	.input-wrapper {
		display: grid;
		grid-template-columns: 1.5rem 1.8rem 1fr;
		align-items: center;
		span {
			color: #616475;
			grid-row: 1;
			grid-column: 2;
		}
	}
	.input {
		background: none;
		border: 1px solid var(--color-text);
		color: inherit;
		font: inherit;
		height: 100%;
		padding-left: 4.5rem;
		padding-right: 1rem;
		width: 100%;
		grid-row: 1;
		grid-column: 1 / -1;
		&:focus {
			outline: none;
		}
	}
`;

function WeatherForm() {
	const [location, setLocation] = useState('');

	const disableButton = () => location.length < 3;

	return (
		<WeatherFormStyled>
			<div className="input-wrapper">
				<span className="material-icons">search</span>
				<input
					type="text"
					placeholder="search location"
					autoFocus={true}
					aria-label="Search location"
					className="input"
					value={location}
					onChange={({ target }) => setLocation(target.value)}
				/>
			</div>
			<Button text="Search" disabled={disableButton()} />
		</WeatherFormStyled>
	);
}

export default WeatherForm;
