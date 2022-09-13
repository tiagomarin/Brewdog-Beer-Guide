import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import Beer from './Beer';
import {
  getBeers,
  changeFilter,
  veryLow,
  low,
  medium,
  high,
  veryHigh,
  ultraHigh,
} from '../../Redux/beersSlice';

const BeerList = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.beers.filter);
  const beerList = useSelector((state) => state.beers.allBeers);
  const filteredBeerList = useSelector((state) => state.beers.filtered || [], shallowEqual);

  useEffect(() => {
    if (!beerList.length) {
      dispatch(getBeers());
    }
  });

  const bitternessFilterHandler = (filter) => {
    switch (filter) {
      case 'Very low':
        dispatch(veryLow());
        break;
      case 'Low':
        dispatch(low());
        break;
      case 'Medium':
        dispatch(medium());
        break;
      case 'High':
        dispatch(high());
        break;
      case 'Very high':
        dispatch(veryHigh());
        break;
      case 'Ultra high':
        dispatch(ultraHigh());
        break;
      default:
        break;
    }
  };

  return (
    <ul className="beer-list-page">
      <h2>list of ALL beers</h2>
      {/* filter dropdown */}
      <select
        className="filter-menu"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
          bitternessFilterHandler(filter);
        }}
      >
        <option value="">All Beers</option>
        <option value="Very low">very low</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Very high">Very high</option>
        <option value="Ultra high">Ultra high</option>
      </select>
      {/* <button
        type="button"
        onClick={bitternessFilterHandler(filter)}
      >
        filter
      </button> */}
      {/* list items */}
      {filter === '' || filter === 'All beers'
        ? beerList.map((item) => (
          <Link
            to="/BeerDetails"
            state={item}
            key={item.id}
          >
            <Beer
              beerData={item}
            />
          </Link>
        ))
        : filteredBeerList.map((item) => (
          <Link
            to="/BeerDetails"
            state={item}
            key={item.id}
          >
            <Beer
              beerData={item}
            />
          </Link>
        ))}
    </ul>
  );
};

export default BeerList;
