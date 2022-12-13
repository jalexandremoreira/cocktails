import React from 'react';
import { isMobile } from 'react-device-detect';

import Alphabet from './Components/Alphabet';
import Card from './Components/ListCard';
import Modal from './Components/Modal';
import { Drink } from './types';
import * as API from './api';

export default function App() {
  const [drink, setDrink] = React.useState<Drink | null>(null);
  const [drinks, setDrinks] = React.useState<Drink[] | null>(null);
  const [favorites, setFavorites] = React.useState<Drink[] | null>(null);
  const [letter, setLetter] = React.useState<string | null>('a');
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    API.fetchAlphabet(letter ?? '').then((drinkData) => setDrinks(drinkData));
  }, [letter]);

  React.useEffect(() => {
    selectedId &&
      API.fetchByID(selectedId).then((drinkData) => setDrink(drinkData));
  }, [selectedId]);

  React.useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  const handleRandomDrink = () => {
    API.fetchRandom().then((drinkData) => {
      setDrink(drinkData);
      setShowModal(true);
    });
  };

  const viewFavorites = () => {
    if (!favorites || favorites.length === 0) return;

    setLetter(null);
    setDrinks(favorites);
  };

  return (
    <div style={{ maxWidth: '900px', margin: isMobile ? '0 10px' : '0 30px' }}>
      <div
        style={{
          alignItems: 'baseline',
          justifyContent: 'space-between',
          display: 'flex',
          fontSize: isMobile ? '50px' : '90px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <span
          className="AbrilFatface white"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => setLetter('a')}
        >
          Cocktails
        </span>

        <svg
          id="modal-favorites-button"
          style={{
            cursor:
              !favorites || favorites.length === 0 ? 'not-allowed' : 'pointer',
            marginRight: isMobile ? '10px' : '15px',
          }}
          onClick={viewFavorites}
          width={isMobile ? '30' : '50'}
          height={isMobile ? '30' : '50'}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4166 43.75V10.4167C10.4166 9.27083 10.825 8.28958 11.6416 7.47292C12.4569 6.65764 13.4375 6.25 14.5833 6.25H35.4166C36.5625 6.25 37.5437 6.65764 38.3604 7.47292C39.1757 8.28958 39.5833 9.27083 39.5833 10.4167V43.75L25 37.5L10.4166 43.75Z"
            fill={
              !favorites || favorites.length === 0
                ? 'rgba(237, 229, 229, 0.34)'
                : '#EDE5E5'
            }
          />
        </svg>
      </div>
      <Modal
        drink={drink}
        showModal={showModal}
        setShowModal={setShowModal}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Alphabet
        randomDrink={handleRandomDrink}
        setLetter={setLetter}
        letter={letter ?? ''}
      />

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
          <>
            {drinks?.map((drink, id) => (
              <Card
                drink={drink}
                key={id}
                setSelectedId={setSelectedId}
                setShowModal={setShowModal}
              />
            ))}
            <div style={{ width: isMobile ? '48%' : '30%' }} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
