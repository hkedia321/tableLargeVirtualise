import React from 'react';

const numberFormatOptions = { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 2 
};

export const formatCurrencyForDisplay = (number) => {
return <>&euro; {Number(number).toLocaleString('en', numberFormatOptions)}</>;
}

export const formatDateForDisplay = (value) => {
    if (value) {
        let date = new Date(value);
        let month = date.toDateString().substring(4,7);
        return formatNumberRank(date.getDate()) + '' + month + ' ' + date.getFullYear();
    }
}

const formatNumberRank = (value) => {
    if (value === 1) return '<span>1<sup>st</sup></span>'
    if (value === 2) return '<span>2<sup>nd</sup></span>'
    if (value === 3) return '<span>3<sup>rd</sup></span>'
    return `<span>${value}<sup>th</sup></span>`
}