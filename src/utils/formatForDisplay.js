const numberFormatOptions = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}

const formatNumberRank = (value) => {
  if (value === 1) return "<span>1<sup>st</sup></span>"
  if (value === 2) return "<span>2<sup>nd</sup></span>"
  if (value === 3) return "<span>3<sup>rd</sup></span>"
  return `<span>${value}<sup>th</sup></span>`
}

export const formatCurrencyForDisplay = (number) => {
  return `&euro;&nbsp;${Number(number).toLocaleString(
    "en",
    numberFormatOptions
  )}`
}

export const formatDateForDisplay = (value) => {
  if (value) {
    const date = new Date(value)
    const month = date.toDateString().substring(4, 7)
    return `${formatNumberRank(date.getDate())}${month} ${date.getFullYear()}`
  }
  return ""
}
