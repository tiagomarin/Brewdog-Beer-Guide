import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBeers } from '../../Redux/beersSlice';
import BitternessFilter from './BitternessFilter';
import Beer from './Beer';
import './BeerList.css';

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
    <div className="home-page">
      <header>
        {
          filter === 'All Beers'
            ? <h2>All Beers</h2>
            : <h2>{filter.toUpperCase()} bitterness beers</h2>
        }
        <BitternessFilter />
      </header>
      <ul className="beer-list">
        {filter === '' || filter === 'All Beers'
          ? beerList.map((item) => (
            <Link
              to="/BeerDetails"
              state={item}
              key={item.id}
              className="beer-card-wrap"
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
              className="beer-card-wrap"
            >
              <Beer
                beerData={item}
              />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default BeerList;
