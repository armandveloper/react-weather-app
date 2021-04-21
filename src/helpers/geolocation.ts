export const getCurrentPosition = () => {
	return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
		window.navigator.geolocation.getCurrentPosition(
			({ coords }: GeolocationPosition) => {
				const lat = coords.latitude,
					lng = coords.longitude;
				resolve({ lat, lng });
			},
			(error: GeolocationPositionError) => {
				reject(error);
			}
		);
	});
};
