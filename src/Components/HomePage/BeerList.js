import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBeers } from '../../Redux/beersSlice';
import BitternessFilter from './BitternessFilter';
import Beer from './Beer';

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

  return (
    <ul className="beer-list-page">
      <h2>list of ALL beers</h2>
      <BitternessFilter />
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
