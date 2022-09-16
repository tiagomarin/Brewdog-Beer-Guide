import reducer, { changeFilter, veryLow } from '../Redux/beersSlice';

describe('test reducer functions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
        allBeers: [], filter: 'All Beers', filtered: [], status: 'idle',
      },
    );
  });

  it('should change "filter" property to "Very low"', () => {
    const previousState = {};
    expect(reducer(previousState, changeFilter('Very low'))).toEqual({ filter: 'Very low' });
  });

  it('should populate the "filtered" property of the state', () => {
    const mockAllBeers = [
      {
        name: 'one',
        ibu: '7',
      },
      {
        name: 'two',
        ibu: '15',
      },
    ];
    const previousState = {
      allBeers: [mockAllBeers],
      filter: 'Very low',
    };
    expect(reducer(previousState, veryLow())).toEqual({
      allBeers: [mockAllBeers],
      filter: 'Very low',
      filtered: [],
    });
  });
});
