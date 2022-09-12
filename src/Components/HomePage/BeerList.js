import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Beer from './Beer';
import { getBeers } from '../../Redux/beersSlice';

const BeerList = () => {
  const dispatch = useDispatch();
  const beerList = useSelector((state) => state.beers);
  useEffect(() => {
    if (!beerList.length) {
      dispatch(getBeers());
    }
  });

  return (
    <ul className="beer-list-page">
      <h2>list of beers of a selected IBU</h2>
      {beerList.map((item) => (
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

/* <Link
state={hero}
className="characters-link"
key={`heroid-${hero.id}`}
to="Comics">
<Character newhero={hero} />
</Link> */
