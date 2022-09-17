import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Beer from '../Components/HomePage/Beer';
import store from '../Redux/store';

describe('Beer component test', () => {
  const beerData = {
    abv: 4.7,
    attenuation_level: 78,
    boil_volume: { value: 25, unit: 'litres' },
    brewers_tips: "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
    contributed_by: 'Sam Mason <samjbmason>',
    description: 'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
    ebc: 12,
    first_brewed: '03/2013',
    food_pairing: ['Fried crab cakes with avocado salsa', 'Spicy shredded pork roll with hot dipping sauce', 'Key lime pie'],
    ibu: 40,
    id: 8,
    image_url: 'https://images.punkapi.com/v2/8.png',
    name: 'Fake Lager',
    ph: 4.4,
    srm: 6,
    tagline: 'Bohemian Pilsner.',
    target_fg: 1010,
    target_og: 1046,
    volume: { value: 20, unit: 'litres' },
  };

  it(' rendered Beer component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Beer beerData={beerData} />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
