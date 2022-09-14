import React from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import hopsIcon from '../../assets/hops_icon.svg';
import maltsIcon from '../../assets/malts_icon.svg';

const BeerDetails = () => {
  const location = useLocation(); // access props sent by link
  const beerData = location.state; // props from link

  return (
    <li className="beer-page">
      <Link to="/">back</Link>
      <h3>{beerData.name}</h3>
      <img alt={beerData.name} src={beerData.image_url} width="40px" />
      <p>{beerData.description}</p>
      <h4>Pair this beer with: </h4>
      <p>{beerData.food_pairing}</p>
      <ul>
        <li>ABV {beerData.abv}%</li>
        <li>IBU {beerData.ibu}</li>
        <li className="ingredients">
          <ul className="hops">
            <span>
              <img src={hopsIcon} alt="hops icon" />
              HOPS
            </span>
            {beerData.ingredients.hops.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
          <ul className="malts">
            <span>
              <img src={maltsIcon} alt="hops icon" />
              Malts
            </span>
            {beerData.ingredients.malt.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </li>
  );
};

// BeerDetails.propTypes = {
//   beerID: PropTypes.shape(
//     {
//       // rocket_id: PropTypes.string,
//       // rocket_name: PropTypes.string,
//       // description: PropTypes.string,
//       // reserved: PropTypes.bool,
//       // flickr_images: PropTypes.arrayOf(PropTypes.string),
//     },
//   ).isRequired,
// };

export default BeerDetails;
