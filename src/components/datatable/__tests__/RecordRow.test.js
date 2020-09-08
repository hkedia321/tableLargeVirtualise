import React from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import "jest-styled-components"
import RecordRow from "../RecordRow"

jest.mock("react-tooltip", () => () => <div>react-tooltip</div>)

jest.mock("highcharts-react-official", () => {
  // eslint-disable-next-line react/prop-types
  return function DummyHighcharts({ options }) {
    return <div id="MockedHighcharts">{JSON.stringify(options)}</div>
  }
})

afterEach(cleanup)

const recordRowProps = {
  isCampaignColumnOpen: true,
  isGraphColumnsOpenArray: [true, true],
  rowData: {
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
  dataTableGraphRecords: [
    {
      heading: "App and Installs",
      key: "aj_app_and_installs",
    },
    {
      heading: "CoH Real Acquisition",
      key: "aj_coh_0w_and_real_acquisition",
    },
  ],
}

it("renders recordRow correctly with showing all columns", () => {
  const tbody = document.createElement("tbody")
  const { getByTestId, queryByTestId, queryAllByTestId } = render(
    <RecordRow {...recordRowProps} />,
    {
      container: document.body.appendChild(tbody),
    }
  )
  expect(getByTestId("recordRow"))
  // campaign cell should show the data
  expect(queryByTestId("dataCellCampaignId")).toHaveTextContent(
    recordRowProps.rowData.groups.Campaign.metadata.name
  )
  // graph cells should show the data
  // eslint-disable-next-line no-restricted-syntax
  for (const [index] of recordRowProps.dataTableGraphRecords.entries()) {
    expect(queryAllByTestId("dataCellGraph")[index].firstChild)
  }
})

it("renders recordRow correctly when campaign id cells are hidden", () => {
  const tbody = document.createElement("tbody")
  const { queryByTestId, queryAllByTestId } = render(
    <RecordRow {...recordRowProps} isCampaignColumnOpen={false} />,
    {
      container: document.body.appendChild(tbody),
    }
  )
  // campaign cell should not show the data
  expect(queryByTestId("dataCellCampaignId")).not.toHaveTextContent(
    recordRowProps.rowData.groups.Campaign.metadata.name
  )
  // graph cells should show the data
  // eslint-disable-next-line no-restricted-syntax
  for (const [index] of recordRowProps.dataTableGraphRecords.entries()) {
    expect(queryAllByTestId("dataCellGraph")[index].firstChild)
  }
})

it("renders recordRow correctly when graph cells are hidden", () => {
  const tbody = document.createElement("tbody")
  const { queryByTestId, queryAllByTestId } = render(
    <RecordRow
      {...recordRowProps}
      isGraphColumnsOpenArray={new Array(
        recordRowProps.dataTableGraphRecords.length
      ).fill(false)}
    />,
    {
      container: document.body.appendChild(tbody),
    }
  )
  // campaign cell should show the data
  expect(queryByTestId("dataCellCampaignId")).toHaveTextContent(
    recordRowProps.rowData.groups.Campaign.metadata.name
  )
  // graph cells should not show the data
  // eslint-disable-next-line no-restricted-syntax
  for (const [index] of recordRowProps.dataTableGraphRecords.entries()) {
    expect(queryAllByTestId("dataCellGraph")[index].firstChild).toBeNull()
  }
})

it("matches snapshot", () => {
  const tbody = document.createElement("tbody")
  const tree = renderer
    .create(<RecordRow {...recordRowProps} />, {
      container: document.body.appendChild(tbody),
    })
    .toJSON()
  expect(tree).toMatchSnapshot()
})
