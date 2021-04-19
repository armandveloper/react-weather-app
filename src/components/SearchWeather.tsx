import styled, { keyframes } from 'styled-components';
import Button from './Button';

const slideUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
`;

const SearchWeatherStyled = styled.div`
	background-color: var(--bg-sidebar);
	height: 100vh;
	padding: 1.8rem 1.2rem;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	animation: ${slideUp} 0.5s ease-out;
	&.out {
		animation: ${slideDown} 0.5s ease-out forwards;
	}
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
	.form {
		height: 4.8rem;
		margin-top: 3rem;
		display: grid;
		grid-template-columns: 1fr 8.6rem;
		gap: 1.2rem;
	}
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

function SearchWeather() {
	return (
		<SearchWeatherStyled>
			<button className="btn-close">
				<span className="material-icons">close</span>
			</button>
			<form className="form">
				<div className="input-wrapper">
					<span className="material-icons">search</span>
					<input
						type="text"
						placeholder="search location"
						autoFocus={true}
						aria-label="Search location"
						className="input"
					/>
				</div>
				<Button text="Search" />
			</form>
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
