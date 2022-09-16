import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';
import store from '../Redux/store';

describe('App component', () => {
  it('rendered App component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
