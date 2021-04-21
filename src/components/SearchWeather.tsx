import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { slideDown, slideUp } from '../animations';
import { WeatherContext } from '../context/WeatherContext';
import LocationList from './LocationList';
import WeatherForm from './WeatherForm';

const SearchWeatherStyled = styled.div<{ show: boolean }>`
	background-color: var(--bg-sidebar);
	height: 100vh;
	padding: 1.8rem 1.2rem;
	overflow-y: auto;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	animation: ${({ show }) => (show ? slideUp : slideDown)} 0.4s ease-out;
	@media (min-width: 56.25em) {
		width: 32rem;
	}
	@media (min-width: 75em) {
		width: 46rem;
	}
	.btn-close {
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		display: block;
		margin: 0;
		margin-left: auto;
		margin-right: 0.6rem;
		padding: 0;
		transition: transform 0.3s ease;
		&:focus {
			outline: none;
		}
		&:focus,
		&:hover {
			transform: scale(1.15);
		}
	}
	.error {
		margin-top: 4rem;
		font-size: 1.8rem;
	}
`;

function SearchWeather({ show }: { show: boolean }) {
	const { hideSearchWeather } = useContext(WeatherContext);

	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const [isSearchError, setSearchError] = useState(false);

	if (!shouldRender) return null;

	return (
		<SearchWeatherStyled onAnimationEnd={handleAnimationEnd} show={show}>
			<button className="btn-close" onClick={hideSearchWeather}>
				<span className="material-icons">close</span>
			</button>
			<WeatherForm setSearchError={setSearchError} />

			{isSearchError ? (
				<div className="error">
					<p>No results found</p>
				</div>
			) : (
				<LocationList />
			)}
		</SearchWeatherStyled>
	);
}

export default SearchWeather;
