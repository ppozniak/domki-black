export const formatCurrency = (value: number) => {
	if (Number.isInteger(value)) {
		return value.toLocaleString('pl', {
			style: 'currency',
			currency: 'PLN',
			minimumFractionDigits: 0,
			maximumFractionDigits: 2
		});
	} else {
		return value.toLocaleString('pl', {
			style: 'currency',
			currency: 'PLN',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	}
};
