import styled from 'styled-components';

const TodayHightlightsStyled = styled.section`
	margin-top: 5rem;
	margin-bottom: 4rem;
	padding: 0 2rem;
	@media (min-width: 75em) {
		padding: 0;
	}
	.headline {
		font-size: 3.2rem;
		margin: 0 0 3.2rem;
	}
	.grid {
		display: grid;
		gap: 3.2rem;
		@media (min-width: 75em) {
			grid-template-columns: repeat(2, 1fr);
			gap: 4.8rem;
		}
	}
	.hightlight {
		background-color: var(--bg-sidebar);
		padding: 2.2rem;
		text-align: center;
	}
	.hightlight-name {
		font-size: 1.6rem;
		font-weight: 500;
		margin: 0;
		text-transform: capitalize;
	}
	.hightlight-result {
		font-size: 6.4rem;
		font-weight: 700;
		margin: 1rem 0;
		span {
			font-size: 3.6rem;
			font-weight: 500;
		}
	}
	.progress-bar {
		.percentage {
			color: #a09fb1;
			font-size: 1.2rem;
			font-weight: 700;
			margin-bottom: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.percentage-sign {
			color: #a09fb1;
			font-size: 1.2rem;
			font-weight: 700;
			margin-top: 0.5rem;
			text-align: right;
		}
	}
	.bar {
		background-color: var(--color-text);
		border-radius: 0.8rem;
		height: 0.8rem;
		.progress {
			background-color: var(--color-yellow);
			border-radius: 0.8rem;
			height: 100%;
			width: 20%;
			transition: width 0.3s linear;
		}
	}
`;

function TodayHightlights() {
	return (
		<TodayHightlightsStyled>
			<h2 className="headline">Today's Hightlights</h2>
			<div className="grid">
				<div className="hightlight">
					<h4 className="hightlight-name">Wind status</h4>
					<p className="hightlight-result">
						7 <span>mph</span>
					</p>
					<p className="hightlight-extra">WSW</p>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Humidity</h4>
					<p className="hightlight-result">
						84 <span>%</span>
					</p>
					<div className="progress-bar">
						<div className="percentage">
							<span>0</span>
							<span>50</span>
							<span>100</span>
						</div>
						<div className="bar">
							<div className="progress"></div>
						</div>
						<div className="percentage-sign">%</div>
					</div>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Visibility</h4>
					<p className="hightlight-result">
						6,4 <span>miles</span>
					</p>
				</div>
				<div className="hightlight">
					<h4 className="hightlight-name">Air Pressure</h4>
					<p className="hightlight-result">
						998 <span>mb</span>
					</p>
				</div>
			</div>
		</TodayHightlightsStyled>
	);
}

export default TodayHightlights;
