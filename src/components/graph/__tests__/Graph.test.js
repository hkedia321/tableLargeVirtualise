import React from "react"
import { render, cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Graph from ".."

jest.mock(
  "highcharts-react-official",
  () =>
    // eslint-disable-next-line react/prop-types
    function DummyHighcharts({ options }) {
      return <div id="MockedHighcharts">{JSON.stringify(options)}</div>
    }
)

afterEach(cleanup)

const graphDataPoints = [
  ["2020-01-01", 120],
  ["2020-01-02", 175],
  ["2020-01-03", 140],
  ["2020-01-04", 240],
  ["2020-01-05", 200],
  ["2020-01-06", 202],
  ["2020-01-07", 103],
  ["2020-01-08", 35],
  ["2020-01-09", 50],
  ["2020-01-10", 130],
]

it("renders graph without crashing", () => {
  render(<Graph data={graphDataPoints} />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Graph data={graphDataPoints} />).toJSON()
  expect(tree).toMatchSnapshot()
})
