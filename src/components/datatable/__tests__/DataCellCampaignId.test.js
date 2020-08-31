import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import DataCellCampaignId from '../DataCellCampaignId';

afterEach(cleanup);

const dataCellCampaignIdProps = {
    text: 'campaign id text', 
    isOpen:true
}

it('renders dataCellCampaignId correctly', () => {
    
    const tableRow = document.createElement('tr');
    const { getByTestId, debug } = render(<DataCellCampaignId {...dataCellCampaignIdProps} />, {
        container: document.body.appendChild(tableRow),
    });
    // debug();
    expect(getByTestId('dataCellCampaignId'));
    // should have text on open state
    expect(getByTestId('dataCellCampaignId')).toHaveTextContent(dataCellCampaignIdProps.text);
})

it('renders dataCellCampaignId correctly', () => {
    
    const tableRow = document.createElement('tr');
    const { getByTestId } = render(<DataCellCampaignId {...dataCellCampaignIdProps} isOpen = {false} />, {
        container: document.body.appendChild(tableRow),
    });
    expect(getByTestId('dataCellCampaignId'));
    // shouln't have text on close state
    expect(getByTestId('dataCellCampaignId')).not.toHaveTextContent(dataCellCampaignIdProps.text);
})

it('matches snapshot', () => {
    const tree = renderer.create(<DataCellCampaignId {...dataCellCampaignIdProps} />).toJSON();
    expect(tree).toMatchSnapshot();
})