import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import * as utils from 'utils';
import DataCellGraph from '../DataCellGraph';

jest.mock('highcharts-react-official', () => {
    return function DummyHighcharts(
      {options}
    ) {
      return (
        <div id="MockedHighcharts">
          {JSON.stringify(options)}
        </div>
      );
    };
  });

afterEach(cleanup);

const dataCellGraphProps = {
    columnObject: {heading: "App and Installs", key: "aj_app_and_installs"}, 
    rowData: {
        groups: {
            Campaign: {
                metadata: {
                    name: "99733871-f7c5-4b52-9773-1ca69816fc03"
                }
            }
        },
        trend: [
            {
                aj_app_and_installs: 178,
                aj_app_ios_installs: 0,
                aj_coh_0w_and_real_acquisition: 14,
                aj_coh_0w_ios_real_acquisition: 0,
                day: "2020-06-01"
            },
            {
                aj_app_and_installs: 166,
                aj_app_ios_installs: 0,
                aj_coh_0w_and_real_acquisition: 21,
                aj_coh_0w_ios_real_acquisition: 0,
                day: "2020-06-02"
            }
        ]
    },
    isOpen:true
}

it('renders dataCellGraph correctly', () => {
    
    const tableRow = document.createElement('tr');
    const { getByTestId } = render(<DataCellGraph {...dataCellGraphProps} isOpen = {false} />, {
        container: document.body.appendChild(tableRow),
    });
    expect(getByTestId('dataCellGraph'));
    // shouln't have text on close state
    const total = dataCellGraphProps.rowData.trend.reduce((total, dayData) => total + dayData[dataCellGraphProps.columnObject.key], 0)
    const totalAmount = utils.formatCurrencyForDisplay(total);
    expect(getByTestId('dataCellGraph')).not.toHaveTextContent(totalAmount);
})

it('matches snapshot', () => {
    const tree = renderer.create(<DataCellGraph {...dataCellGraphProps} />).toJSON();
    expect(tree).toMatchSnapshot();
})