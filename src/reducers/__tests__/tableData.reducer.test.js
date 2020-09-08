import reducer from ".."

describe("REDUCER for tableData", () => {
  const initialState = {
    tableData: {
      data: [],
      fetched: false,
      error: null,
      errorMsg: null,
    },
  }
  const payload = {
    data: {
      data: [
        {
          groups: {
            Campaign: {
              metadata: {
                name: "713a8eee-3922-403a-9783-0db899c54ead",
              },
            },
          },
          trend: [
            {
              day: "2020-06-01",
              aj_coh_0w_ios_real_acquisition: 0,
              aj_app_and_installs: 2496,
              aj_app_ios_installs: 0,
              aj_coh_0w_and_real_acquisition: 182,
            },
            {
              day: "2020-06-02",
              aj_coh_0w_ios_real_acquisition: 0,
              aj_app_and_installs: 2476,
              aj_app_ios_installs: 0,
              aj_coh_0w_and_real_acquisition: 167,
            },
          ],
        },
      ],
    },
  }
  const errorPayload = {
    error: "API error",
  }
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle "REQUEST_TABLE_DATA" action', () => {
    expect(reducer({}, { type: "REQUEST_TABLE_DATA" })).toEqual(initialState)
  })

  it('should handle "SUCCESS_TABLE_DATA" action', () => {
    expect(reducer({}, { type: "SUCCESS_TABLE_DATA", payload })).toEqual({
      ...initialState,
      tableData: {
        ...initialState.tableData,
        fetched: true,
        data: payload.data.data,
      },
    })
  })

  it('should handle "ERROR_TABLE_DATA" action', () => {
    expect(
      reducer({}, { type: "ERROR_TABLE_DATA", payload: errorPayload })
    ).toEqual({
      ...initialState,
      tableData: {
        ...initialState.tableData,
        fetched: true,
        errorMsg: "Couldn't Fetch Data",
        error: errorPayload.error,
      },
    })
  })
})
