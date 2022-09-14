import React from 'react';
import PropTypes from 'prop-types';

const Beer = (props) => {
  const { beerData } = props;

  return (
    <li className="beer-card">
      <h3>{beerData.name}</h3>
      <div>
        <img alt={beerData.name} src={beerData.image_url} width="40px" />
        <div>
          <span>IBU</span>
          {beerData.ibu}
        </div>
      </div>
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
      // reserved: PropTypes.bool,
      // flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};

export default Beer;
