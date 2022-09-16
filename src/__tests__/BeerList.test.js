import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import BeerList from '../Components/HomePage/BeerList';
import store from '../Redux/store';

describe('BeerDetails Component test', () => {
  it('rendered BeerDetails Component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <BeerList />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
