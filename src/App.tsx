import React from 'react';

import * as API from './api';
import { Drink } from './types';

export default function App() {
  const [drink, setDrink] = React.useState<Drink | null>(null);

  React.useEffect(() => {
    // API.fetchByID(11007).then((drinkData) => setDrink(drinkData));
    API.fetchAlphabet('a').then((drinkData) => setDrink(drinkData));
  }, []);

  console.log(drink);

  return (
    <div className="App">
      <p>henlo</p>
    </div>
  );
}
