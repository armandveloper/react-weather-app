import styled from 'styled-components';
import Sidebar from './Sidebar';

const LayoutStyled = styled.div`
	color: inherit;
	display: grid;
	grid-auto-rows: 100vh;
	@media (min-width: 56.25em) {
		grid-template-columns: 32rem 1fr;
	}
	@media (min-width: 75em) {
		height: 100vh;
		overflow: hidden;
		grid-template-columns: 46rem 1fr;
	}
`;

function Layout() {
	return (
		<LayoutStyled>
			<h1>Weather App</h1>
			<Sidebar />
		</LayoutStyled>
	);
}

export default Layout;
