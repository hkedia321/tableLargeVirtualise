import * as utils from "../formatForDisplay"

describe("utils formatDateForDisplay", () => {
  it("should format date correctly", () => {
    const dateValue = "2020-08-01"
    const expectedFormatedDate = "<span>1<sup>st</sup></span>Aug 2020"
    expect(utils.formatDateForDisplay(dateValue)).toEqual(expectedFormatedDate)
  })
})

describe("utils formatCurrencyForDisplay", () => {
  it("should format currency correctly", () => {
    const currencyValue = "4000800"
    const expectedFormatedCurrency = "&euro;&nbsp;4,000,800"
    expect(utils.formatCurrencyForDisplay(currencyValue)).toEqual(
      expectedFormatedCurrency
    )
  })
})
