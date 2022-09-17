import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBeers = createAsyncThunk(
  'beers/getBeers',
  async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const beersList = await response.json();
    return beersList;
  },
);

const initialState = {
  filter: 'All Beers',
  allBeers: [],
  filtered: [],
  status: 'idle',
};

const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    veryLow: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu <= 15);
    },
    low: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu > 15 && element.ibu <= 30);
    },
    medium: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu > 30 && element.ibu <= 50);
    },
    high: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu > 50 && element.ibu <= 70);
    },
    veryHigh: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu > 70 && element.ibu <= 90);
    },
    ultraHigh: (state) => {
      state.filtered = state.allBeers.filter((element) => element.ibu > 90);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBeers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBeers.fulfilled, (state, action) => {
        state.allBeers = action.payload;
        state.status = 'fulfilled';
      });
  },
});

export const {
  changeFilter,
  veryLow,
  low,
  medium,
  high,
  veryHigh,
  ultraHigh,
} = beersSlice.actions;

export default beersSlice.reducer;
