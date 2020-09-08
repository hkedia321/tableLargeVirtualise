import * as actions from "../actionCreators"
import * as types from "../actionTypes"

describe("actions", () => {
  it("should create an action to trigger request", () => {
    const expectedAction = {
      type: types.REQUEST_TABLE_DATA,
    }
    expect(actions.requestTableData()).toEqual(expectedAction)
  })
})
