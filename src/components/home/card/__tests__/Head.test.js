import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Head from '../Head';

jest.mock('react-tooltip', () => (props) => <div>{JSON.stringify(props)}</div>);

afterEach(cleanup);

const headProps = {
    fetchTableData: function(){},
    title: 'testing title',
    isLoading: false,
    subtitle: 'testing subtitle'
}

it('renders cardHead without crashing', () => {
    const { getByTestId } = render(<Head/>);
    expect(getByTestId('cardHead'));
})

it('renders Head correctly', () => {
    render(<Head {...headProps}/>);
    expect(screen.getByText(headProps.title)).toBeInTheDocument();
    expect(screen.getByText(headProps.subtitle)).toBeInTheDocument();
})

it('matches snapshot', () => {
    const tree = renderer.create(<Head {...headProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
})