import React from "react"
import { render, cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Card from "../Card"

jest.mock("react-tooltip", () => (props) => <div>{JSON.stringify(props)}</div>)

afterEach(cleanup)

const cardProps = {
  fetchTableData() {},
  title: "testing title",
  isLoading: false,
  subtitle: "testing subtitle",
}

it("renders card without crashing", () => {
  const { getByTestId } = render(<Card />)
  expect(getByTestId("card"))
})

it("renders card correctly", () => {
  const { getByTestId } = render(<Card {...cardProps} />)
  expect(getByTestId("cardHead")).toBeInTheDocument()
  expect(getByTestId("cardHead")).toHaveTextContent(cardProps.title)
  expect(getByTestId("cardHead")).toHaveTextContent(cardProps.subtitle)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Card {...cardProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
