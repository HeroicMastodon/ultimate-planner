const DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH_LABELS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


function generateFormattedDate(date: string) {
    if (date.indexOf('T') > -1) date = date.split('T')[0]
    const temp = new Date(date + 'T00:00');
    const month = MONTH_LABELS[temp.getMonth()];
    const day = DAY_LABELS[temp.getDay()];
    
    return `${day}, ${month} ${temp.getDate()}`
}

export default function useAFDate() {
	return {
        DAYS_IN_MONTHS,
        MONTH_LABELS,
        DAY_LABELS,
        generateFormattedDate
    };
}
