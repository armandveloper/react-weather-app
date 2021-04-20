import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { slideDown, slideUp } from '../animations';
import { WeatherContext } from '../context/WeatherContext';
import WeatherForm from './WeatherForm';

const SearchWeatherStyled = styled.div<{ show: boolean }>`
	background-color: var(--bg-sidebar);
	height: 100vh;
	padding: 1.8rem 1.2rem;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	animation: ${({ show }) => (show ? slideUp : slideDown)} 0.5s ease-out;
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
	.location-list {
		list-style: none;
		margin: 3.5rem 0 0;
		padding: 0;
	}
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

function SearchWeather({ show }: { show: boolean }) {
	const { hideSearchWeather } = useContext(WeatherContext);

	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<SearchWeatherStyled onAnimationEnd={handleAnimationEnd} show={show}>
			<button className="btn-close" onClick={hideSearchWeather}>
				<span className="material-icons">close</span>
			</button>
			<WeatherForm />
			<ul className="location-list">
				<li className="location-item">
					London
					<span className="material-icons">chevron_right</span>
				</li>
				<li className="location-item">
					París
					<span className="material-icons">chevron_right</span>
				</li>
				<li className="location-item">
					Madrid
					<span className="material-icons">chevron_right</span>
				</li>
			</ul>
		</SearchWeatherStyled>
	);
}

export default SearchWeather;
