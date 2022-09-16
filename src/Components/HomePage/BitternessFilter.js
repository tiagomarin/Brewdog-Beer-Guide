import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeFilter,
  veryLow,
  low,
  medium,
  high,
  veryHigh,
  ultraHigh,
} from '../../Redux/beersSlice';

const BitternessFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.beers.filter);
  const bitternessFilterHandler = (filter) => {
    dispatch(changeFilter(filter));
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
    <div className="filter-wrapper ">
      <select
        className="filter-menu"
        name="filter"
        onChange={(e) => {
          bitternessFilterHandler(e.target.value);
        }}
      >
        <option value="">{filter}</option>
        <option value="All Beers">All Beers</option>
        <option value="Very low">Very low</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Very high">Very high</option>
        <option value="Ultra high">Ultra high</option>
      </select>
    </div>
  );
};

export default BitternessFilter;

/* <button
    type="button"
    onClick={bitternessFilterHandler(filter)}
  >
    filter
  </button> */
