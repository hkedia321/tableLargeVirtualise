import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ErrorDisplay from '../';

afterEach(cleanup);

it('renders errorDisplay without crashing', () => {
    const { getByTestId } = render(<ErrorDisplay/>);
    expect(getByTestId('errorDisplay'));
})

it('renders errorDisplay correctly', () => {
    const { getByTestId } = render(<ErrorDisplay message="error"/>);
    expect(getByTestId('errorDisplay')).toHaveTextContent("Error: error");
})

it('matches snapshot', () => {
    const tree = renderer.create(<ErrorDisplay message="error"/>).toJSON();
    expect(tree).toMatchSnapshot();
})