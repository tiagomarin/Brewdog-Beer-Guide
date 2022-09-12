import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const BeerDetails = () => {
  const location = useLocation(); // access props sent by link
  const beerData = location.state; // props from link

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
      <p>{beerData.food_pairing}</p>
      <ul>
        <li>{beerData.abv}</li>
        <li>{beerData.ibu}</li>
        <li>
          <ul>
            {beerData.ingredients.hops.map((item) => (
              <li
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {/*
    "hops": [
        {
          "name": "Ahtanum",
          "amount": {
            "value": 17.5,
            "unit": "grams"
           },
           "add": "start",
           "attribute": "bitter"
         },
         {
           "name": "Chinook",
           "amount": {
             "value": 15,
             "unit": "grams"
           },
           "add": "start",
           "attribute": "bitter"
         },
         ...
      ],
      "yeast": "Wyeast 1056 - American Ale™" */}
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
