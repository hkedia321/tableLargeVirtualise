import React from 'react';
import { render, cleanup } from 'test-utils';
import 'jest-styled-components';
import Home, {Home as HomeWithoutConnect} from '../Home';

jest.mock('react-tooltip', () => () => <div>react-tooltip</div>);

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

const data = [
    {
      "groups": {
        "Campaign": {
          "metadata": {
            "name": "99733871-f7c5-4b52-9773-1ca69816fc03"
          }
        }
      },
      "trend": [
        {
          "day": "2020-06-01",
          "aj_coh_0w_ios_real_acquisition": 0,
          "aj_app_and_installs": 178,
          "aj_app_ios_installs": 0,
          "aj_coh_0w_and_real_acquisition": 14
        },
        {
          "day": "2020-06-02",
          "aj_coh_0w_ios_real_acquisition": 0,
          "aj_app_and_installs": 166,
          "aj_app_ios_installs": 0,
          "aj_coh_0w_and_real_acquisition": 21
        }
      ]
    }
  ]
const initialState ={
    tableData : {   
        data, 
        fetched: true, 
        error: null, 
        errorMsg: null 
    } 
}

 it('renders Home without crashing', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home'));
})

it('renders the connected app with initialState', () => {
    const mockRequestTableDataAction = jest.fn();
    const { getByTestId } = render(<Home requestTableDataAction={mockRequestTableDataAction}/>, { initialState } );
    expect(getByTestId('home'));
})

it('matches snapshot', () => {
    const requestTableData = jest.fn();
    const {container} = render(<HomeWithoutConnect tableData={{data, fetched: true, errorMsg: null, error: null}} requestTableDataAction={{requestTableData}} />);
    expect(requestTableData).toHaveBeenCalled()
    expect(container).toMatchSnapshot();
})