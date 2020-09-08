import React from "react"

import { render, cleanup } from "test-utils"
import App from "./App"

const initialState = {
  tableData: {
    data: [],
    fetched: true,
    error: null,
    errorMsg: null,
  },
}

afterEach(cleanup)
it("renders Home without crashing", () => {
  const { getByTestId } = render(<App />, { initialState })
  expect(getByTestId("app"))
})
