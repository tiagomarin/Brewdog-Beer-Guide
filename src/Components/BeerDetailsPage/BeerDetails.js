import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const BeerDetails = () => {
  const location = useLocation(); // access props sent by link
  console.log(location);
  const beerData = location.state; // props from link
  console.log(beerData);

  useEffect(() => {
    window.scrollTo(20, 0);
  });

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!beerID) {
  //     dispatch(getBeerDetails(beerID));
  //   }
  // });

  return (
    <li className="beer-page">
      <h2>
        beer name :
        {beerData.name}
      </h2>
      <img alt={beerData.name} src={beerData.image_url} width="40px" />
      <p>{beerData.description}</p>
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
