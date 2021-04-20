import { createContext, ReactNode, useState } from 'react';

interface WeatherContextInt {
	isSearching: boolean;
	showSearchWeather(): void;
	hideSearchWeather(): void;
}

export const WeatherContext = createContext<WeatherContextInt>(
	{} as WeatherContextInt
);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
	const [isSearching, setIsSearching] = useState(false);

	const showSearchWeather = () => setIsSearching(true);

	const hideSearchWeather = () => setIsSearching(false);

	return (
		<WeatherContext.Provider
			value={{
				isSearching,
				showSearchWeather,
				hideSearchWeather,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
