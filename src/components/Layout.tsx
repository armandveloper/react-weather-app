import styled from 'styled-components';
import MainWeather from './MainWeather';
import Sidebar from './Sidebar';

const LayoutStyled = styled.div`
	color: inherit;
	display: grid;
	@media (min-width: 56.25em) {
		grid-template-columns: 32rem 1fr;
		height: 100vh;
		overflow: hidden;
	}
	@media (min-width: 75em) {
		grid-template-columns: 46rem 1fr;
	}
`;

function Layout() {
	return (
		<LayoutStyled>
			<Sidebar />
			<MainWeather />
		</LayoutStyled>
	);
}

export default Layout;
