import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../Redux/store';
import BitternessFilter from '../Components/HomePage/BitternessFilter';

describe('Bitterness Filter', () => {
  it('renders BitternessFilter Component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <BitternessFilter />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
