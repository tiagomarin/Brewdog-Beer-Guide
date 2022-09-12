import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBeers = createAsyncThunk(
  'beers/getBeers',
  async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const beersList = await response.json();
    return beersList;
  },
);

export const getBeerDetails = createAsyncThunk(
  'beers/getBeerDetails',
  async (ID) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${ID}`);
    const BeerDetails = await response.json();
    return BeerDetails;
  },
);

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

const initialState = [];

const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBeers.fulfilled, (state, action) => action.payload);
    builder.addCase(getBeerDetails.fulfilled, (state, action) => action.payload);
  },
});

export const { beersReducer } = beersSlice.actions;

export default beersSlice.reducer;

// .addCase(getBeers.pending, (state) => {
//   state.status = 'loading';
// })
// .addCase(getBeers.fulfilled, (state, action) => {
//   state.status = 'idle';
//   state.value = action.payload;
// });
