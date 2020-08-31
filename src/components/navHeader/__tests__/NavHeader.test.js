import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavHeader from '../';

afterEach(cleanup);

it('renders navHeader without crashing', () => {
    const { getByTestId } = render(<NavHeader />);
    expect(getByTestId('navHeader'));
})

it('matches snapshot', () => {
    const tree = renderer.create(<NavHeader />).toJSON();
    expect(tree).toMatchSnapshot();
})