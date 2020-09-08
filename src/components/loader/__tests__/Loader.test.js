import React from "react"
import { render, cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Loader from ".."

afterEach(cleanup)

it("renders Loader without crashing", () => {
  const { getByTestId } = render(<Loader />)
  expect(getByTestId("loader"))
})

it("matches snapshot", () => {
  const tree = renderer.create(<Loader />).toJSON()
  expect(tree).toMatchSnapshot()
})
