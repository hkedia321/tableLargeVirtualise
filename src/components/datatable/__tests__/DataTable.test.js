import React from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import DataTable from "../DataTable"

jest.mock("react-tooltip", () => () => <div>react-tooltip</div>)

jest.mock(
  "highcharts-react-official",
  () =>
    // eslint-disable-next-line react/prop-types
    function DummyHighcharts({ options }) {
      return <div id="MockedHighcharts">{JSON.stringify(options)}</div>
    }
)

afterEach(cleanup)

const dataTableProps = {
  data: [
    {
      groups: {
        Campaign: {
          metadata: { name: "99733871-f7c5-4b52-9773-1ca69816fc03" },
        },
      },
      trend: [
        {
          aj_app_and_installs: 178,
          aj_app_ios_installs: 0,
          aj_coh_0w_and_real_acquisition: 14,
          aj_coh_0w_ios_real_acquisition: 0,
          day: "2020-06-01",
        },
      ],
    },
  ],
  show: true,
}

it("renders DataTable correctly", () => {
  const { getByTestId, container } = render(<DataTable {...dataTableProps} />)
  expect(getByTestId("datatable"))
  expect(container.querySelectorAll("tr").length).toBeGreaterThan(0)
})

it("renders DataTable correctly when hidden", () => {
  const { queryByTestId } = render(
    <DataTable {...dataTableProps} show={false} />
  )
  expect(queryByTestId("datatable")).toBeNull()
})

it("matches snapshot", () => {
  const tree = renderer.create(<DataTable {...dataTableProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
