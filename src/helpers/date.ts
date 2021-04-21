const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months: string[] = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const formatDate = (timestamp: Date) => {
	const date = new Date(timestamp);
	const dayWeek = days[date.getDay()],
		dayMonth = date.getDate(),
		month = months[date.getMonth()];
	return `${dayWeek}, ${dayMonth} ${month}`;
};
