import React from 'react';
import { isMobile } from 'react-device-detect';

import { Drink } from '../types';

interface Props {
  drink: Drink | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Card({ drink, setSelectedId, setShowModal }: Props) {
  return (
    <div
      style={{
        border: 'solid 1px #ede5e5',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: isMobile ? '230px' : '300px',
        justifyContent: 'flex-end',
        position: 'relative',
        width: isMobile ? '48%' : '30%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: '20px',
      }}
      onClick={() => {
        setSelectedId(Number(drink?.idDrink));
        setShowModal(true);
      }}
    >
      <img
        src={drink?.strDrinkThumb ?? ''}
        alt={drink?.strDrink ?? 'alt'}
        style={{
          height: '100%',
          position: 'absolute',
          width: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.54) 63.54%, #000000 100%)',
          bottom: 0,
          height: '50%',
          position: 'absolute',
          width: '100%',
          zIndex: 5,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          margin: 20,
        }}
      >
        <h2 className="white" style={{ margin: '0 0 10px' }}>
          {drink?.strDrink ?? ''}
        </h2>
        <p className="white" style={{ fontSize: '15px', margin: 0 }}>
          {drink?.strAlcoholic ?? ''}
        </p>
      </div>
    </div>
  );
}
