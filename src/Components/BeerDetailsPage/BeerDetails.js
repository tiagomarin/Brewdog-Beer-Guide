import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backIcon from '../../assets/back-icon.png';
import ibuIcon from '../../assets/ibu-bg.png';
import beerIcon from '../../assets/beer-icon-fat.png';
import hopsIcon from '../../assets/hops-icon.png';
import maltsIcon from '../../assets/malt-icon.png';
import './BeerDetails.css';
import pairWith from '../../assets/pair-with-icon.png';

const BeerDetails = () => {
  const location = useLocation(); // access props/state sent by link
  const beerData = location.state; // props/state from link

  const hops = [];
  beerData.ingredients.hops.forEach((element) => hops.push(element.name));

  const malts = [];
  beerData.ingredients.malt.forEach((element) => malts.push(element.name));

  return (
    <li className="details-page">
      <Link to="/">
        <img alt="back" src={backIcon} className="back" />
      </Link>
      <h3>{beerData.name}</h3>
      <div>
        {/* <img alt={beerData.name} src={beerData.image_url} width="40%" /> */}
        <div className="specs">
          <div
            className="ibu-details"
            style={{ backgroundImage: `url(${ibuIcon})` }}
          >
            IBU
            <br />
            <br />
            {beerData.ibu ? beerData.ibu : 'N/A'}
          </div>
          <div className="abv" style={{ backgroundImage: `url(${beerIcon})` }}>ABV <br /><br /> {beerData.abv}%</div>
        </div>
      </div>
      <p className="description">{beerData.description}</p>
      <div className="info">
        <img alt="icon" src={pairWith} style={{ width: '10vmin' }} />
        <h4>Pair with </h4>
        <p>{beerData.food_pairing}</p>
      </div>
      <div className="info">
        <img src={hopsIcon} alt="hops icon" style={{ width: '10vmin' }} />
        <h4>Hops</h4>
        <p>{malts}</p>
      </div>
      <div className="info">
        <img src={maltsIcon} alt="hops icon" style={{ width: '10vmin' }} />
        <h4>Malts</h4>
        <p>{malts}</p>
      </div>
    </li>
  );
};

export default BeerDetails;
