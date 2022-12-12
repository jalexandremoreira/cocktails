import React from 'react';

import Alphabet from './Components/Alphabet';
import Card from './Components/ListCard';
import Modal from './Components/Modal';
import { Drink } from './types';
import * as API from './api';

export default function App() {
  const [drink, setDrink] = React.useState<Drink | null>(null);
  const [drinks, setDrinks] = React.useState<Drink[] | null>(null);
  const [letter, setLetter] = React.useState<string>('a');
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    API.fetchAlphabet(letter).then((drinkData) => setDrinks(drinkData));
  }, [letter]);

  React.useEffect(() => {
    selectedId &&
      API.fetchByID(selectedId).then((drinkData) => setDrink(drinkData));
  }, [selectedId]);

  return (
    <div style={{ maxWidth: '1200px' }}>
      <Modal drink={drink} showModal={showModal} setShowModal={setShowModal} />
      <Alphabet setLetter={setLetter} letter={letter} />

      <div style={{ height: '30px' }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {drinks ? (
          drinks?.map((drink, id) => (
            <Card
              drink={drink}
              key={id}
              setSelectedId={setSelectedId}
              setShowModal={setShowModal}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
