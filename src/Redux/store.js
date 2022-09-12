import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import beersSlice from './beersSlice';

const store = configureStore({
  reducer: {
    beers: beersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
