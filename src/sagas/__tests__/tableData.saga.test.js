import { put, takeLeading } from "redux-saga/effects"
import { listenForGetTableData, fetchTableData } from "../tableData"

describe("tableData Sagas", () => {
  it('should dispatch action "REQUEST_TABLE_DATA" ', () => {
    const generator = listenForGetTableData()
    expect(generator.next().value).toEqual(
      takeLeading("REQUEST_TABLE_DATA", fetchTableData)
    )
    expect(generator.next().done).toBeTruthy()
  })
  it('should dispatch action "SUCCESS_TABLE_DATA" with result from API', () => {
    const mockResponse = { data: [], ok: true }
    const generator = fetchTableData()
    generator.next()
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: "SUCCESS_TABLE_DATA", payload: { data: mockResponse } })
    )
    expect(generator.next().done).toBeTruthy()
  })
})
