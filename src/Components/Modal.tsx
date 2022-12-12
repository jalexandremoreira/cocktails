import * as React from 'react';

import { Drink } from '../types';

interface Props {
  drink: Drink | null;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ drink, showModal, setShowModal }: Props) {
  if (showModal === true)
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
        }}
        onClick={() => setShowModal(false)}
      >
        <div
          style={{
            backgroundColor: 'white',
            width: '50%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>{drink?.strDrink}</h1>
          <img src={drink?.strDrinkThumb ?? ''} />
        </div>
      </div>
    );
  return null;
}
