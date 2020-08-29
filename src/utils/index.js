const numberFormatOptions = { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 2 
};

export const formatNumberForDisplay = (number) => {
return Number(number).toLocaleString('en', numberFormatOptions);
}