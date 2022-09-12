import React from 'react';
import PropTypes from 'prop-types';

const Beer = (props) => {
  const { beerData } = props;

  return (
    <li className="beer-page">
      <h2>
        beer name :
        {beerData.name}
      </h2>
      <img alt={beerData.name} src={beerData.image_url} width="40px" />
    </li>
  );
};

Beer.propTypes = {
  beerData: PropTypes.shape(
    {
      name: PropTypes.string,
      image_url: PropTypes.string,
      // reserved: PropTypes.bool,
      // flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};

export default Beer;
