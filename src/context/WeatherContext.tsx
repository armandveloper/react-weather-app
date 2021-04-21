import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { TempUnits } from '../constants/temp-units';
import { getCurrentPosition } from '../helpers/geolocation';
import { LocationSearch } from '../interfaces/location-search.interface';
import { WeatherResult } from '../interfaces/weather-result';

interface WeatherContextInt {
	showSearchWeather(): void;
	hideSearchWeather(): void;
	isSearching: boolean;
	locationResult: LocationSearch[];
	weather: WeatherResult;
	isLoading: boolean;
	tempUnit: TempUnits;
	searchLocation(q: string): Promise<void>;
	getWeather(woeid: number): Promise<void>;
	changeToCelsius(): void;
	changeToFahrenheit(): void;
	searchLocationByCoords(lat: number, lng: number): Promise<void>;
}

export const WeatherContext = createContext<WeatherContextInt>(
	{} as WeatherContextInt
);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
	const [isSearching, setIsSearching] = useState(false);

	const showSearchWeather = () => setIsSearching(true);

	const hideSearchWeather = () => setIsSearching(false);

	const baseURL =
		'https://api.allorigins.win/raw?url=https://www.metaweather.com/api';

	const [isLoading, setLoading] = useState(false);

	const [weather, setWeather] = useState<WeatherResult>(null!);

	const getWeather = useCallback(async (woeid: number) => {
		hideSearchWeather();
		setLoading(true);
		try {
			const resp = await fetch(`${baseURL}/location/${woeid}`);
			const data = await resp.json();
			setWeather(data);
		} catch (err) {
			console.log('Error: ', err);
		} finally {
			setLoading(false);
		}
	}, []);

	const [locationResult, setLocationResult] = useState<LocationSearch[]>([]);

	const searchLocation = async (q: string) => {
		try {
			const resp = await fetch(
				`${baseURL}/location/search/?query=${encodeURI(q)}`
			);
			const data = await resp.json();
			if (data.length === 0) throw new Error('No results found');
			setLocationResult(data);
		} catch (err) {
			console.log('Error: ', err);
			setLocationResult([]);
			throw err.name;
		}
	};

	const searchLocationByCoords = useCallback(
		async (lat: number, lng: number) => {
			try {
				setLoading(true);
				const resp = await fetch(
					`${baseURL}/location/search/?lattlong=${lat},${lng}`
				);
				const data: LocationSearch[] = await resp.json();
				if (data.length === 0) throw new Error('No results found');
				getWeather(data[0].woeid);
			} catch (err) {
				console.log('Error: ', err);
			}
		},
		[getWeather]
	);

	const [tempUnit, setTempUnit] = useState(TempUnits.C);

	const changeToCelsius = () => setTempUnit(TempUnits.C);
	const changeToFahrenheit = () => setTempUnit(TempUnits.F);

	useEffect(() => {
		const handleGeolocationPermission = async () => {
			const result = await navigator.permissions.query({
				name: 'geolocation',
			});
			if (result.state === 'granted') {
				const { lat, lng } = await getCurrentPosition();
				return searchLocationByCoords(lat, lng);
			}
			getWeather(766273);
		};
		handleGeolocationPermission();
	}, [getWeather, searchLocationByCoords]);

	return (
		<WeatherContext.Provider
			value={{
				isSearching,
				locationResult,
				weather,
				tempUnit,
				isLoading,
				showSearchWeather,
				hideSearchWeather,
				searchLocation,
				searchLocationByCoords,
				getWeather,
				changeToCelsius,
				changeToFahrenheit,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
