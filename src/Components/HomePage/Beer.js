import React from 'react';
import PropTypes from 'prop-types';
import './Beer.css';

const Beer = (props) => {
  const { beerData } = props;

  return (
    <li className="beer-component">
      <h3>{beerData.name}</h3>
      <div className="ibu">{beerData.ibu ? beerData.ibu : 'N/A'}<br /><span>IBU</span></div>
    </li>
  );
};

Beer.propTypes = {
  beerData: PropTypes.shape(
    {
      name: PropTypes.string,
      image_url: PropTypes.string,
      abv: PropTypes.number,
      ibu: PropTypes.number,
    },
  ).isRequired,
};

export default Beer;
