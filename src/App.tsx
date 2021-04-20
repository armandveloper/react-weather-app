import { WeatherProvider } from './context/WeatherContext';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';

function App() {
	return (
		<WeatherProvider>
			<GlobalStyle />
			<Layout />
		</WeatherProvider>
	);
}

export default App;
