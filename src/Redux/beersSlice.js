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
  filter: 'All beers',
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

// .addCase(getBeers.pending, (state) => {
//   state.status = 'loading';
// })
// .addCase(getBeers.fulfilled, (state, action) => {
//   state.status = 'idle';
//   state.value = action.payload;
// });

// bitternessFilter: (state, bitterness) => {
//   switch (bitterness) {
//     case 'Very low':
//       return state.filter((element) => element.ibu <= 15);
//     case 'Low':
//       return state.filter((element) => element.ibu <= 30);
//     case 'Medium':
//       return state.filter((element) => element.ibu <= 50);
//     case 'High':
//       return state.filter((element) => element.ibu <= 70);
//     case 'Very high':
//       return state.filter((element) => element.ibu <= 90);
//     case 'Ultra high':
//       return state.filter((element) => element.ibu > 90);
//     default:
//       return state;
//   }
// },

// bitternessFilter: (state, action) => {
//   switch (action.payload) {
//     case 'Very low':
//       return (
//         state.filtered = state.unfiltered.filter((element) => element.ibu <= 15)
//       );
//     case 'Low':
//       return (
//         state.filtered = state.unfiltered.filter(
//           (element) => element.ibu > 15 && element.ibu <= 30,
//         )
//       );
//     case 'Medium':
//       return (
//         state.filtered = state.unfiltered.filter(
//           (element) => element.ibu > 30 && element.ibu <= 50,
//         )
//       );
//     case 'High':
//       return (
//         state.filtered = state.unfiltered.filter(
//           (element) => element.ibu > 50 && element.ibu <= 70,
//         )
//       );
//     case 'Very high':
//       return (
//         state.filtered = state.unfiltered.filter(
//           (element) => element.ibu > 70 && element.ibu <= 90,
//         )
//       );
//     case 'Ultra high':
//       return (
//         state.filtered = state.unfiltered.filter((element) => element.ibu > 90)
//       );
//     default:
//       return state;
//   }
// },
