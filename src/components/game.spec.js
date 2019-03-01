import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import renderer from 'react-test-renderer';

import Game from './game';
import { initialState } from '../constants/initialState';

it('renders correctly', () => {
  const store = createStore(reducer, initialState);
  const tree = renderer
    .create(<Provider store={store}><Game /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
