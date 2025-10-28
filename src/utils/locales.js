import moment from 'moment';

export const locale2Digits = (value) => {
	let newValue = Number(value);
	return newValue.toLocaleString('en-US', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	});
};

export const localeMayDigits = (value, digits) => {
	let newValue = Number(value);
	if (Number(newValue.toFixed(0)) === newValue) {
		return newValue.toLocaleString('en-US', {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0,
		});
	} else {
		return newValue.toLocaleString('en-US', {
			maximumFractionDigits: digits,
			minimumFractionDigits: digits,
		});
	}
};

export const localeTimeString = (timestamp, format) => {
	return moment(Number(timestamp)).format(format);
};
