import { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';
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

function WeatherForm({ setSearchError }: { setSearchError(v: boolean): void }) {
	const [location, setLocation] = useState('');
	const [prevLocation, setPrevLocation] = useState(location);

	const disableButton = () => location.length < 3;

	const [isLoading, setLoading] = useState(false);

	const { searchLocation } = useContext(WeatherContext);

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (location.length < 3 || location === prevLocation) return;
		setLoading(true);
		searchLocation(location)
			.then(() => {
				setPrevLocation(location);
				setLocation('');
				setSearchError(false);
			})
			.catch((err) => {
				setSearchError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<WeatherFormStyled onSubmit={handleSearch}>
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
			<Button
				loading={isLoading}
				text="Search"
				disabled={disableButton()}
			/>
		</WeatherFormStyled>
	);
}

export default WeatherForm;
