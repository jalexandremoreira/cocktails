import React from 'react';
import { isMobile } from 'react-device-detect';

interface Props {
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  letter: string;
  randomDrink: () => void;
}

export default function Alphabet({ setLetter, letter, randomDrink }: Props) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div
      style={{
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {alphabet.split('').map((currentLetter, id) => (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <button
              key={id}
              className="white"
              style={{
                background: 'none',
                border: 'none',
                fontSize: currentLetter === letter ? '37px' : '36px',
                fontWeight: currentLetter === letter ? 'bold' : 'normal',
                padding: '5px',
                cursor: 'pointer',
              }}
              onClick={() => setLetter(currentLetter)}
            >
              {currentLetter}
            </button>
            {currentLetter === letter ? (
              <div
                style={{
                  background: '#E06C19',
                  borderRadius: 1000,
                  height: '3px',
                  marginTop: -2,
                  width: '11px',
                }}
              />
            ) : null}
          </div>
        ))}
        <div style={{ margin: 'auto' }} />
      </div>
      <span
        className="orange"
        onClick={randomDrink}
        style={{ fontSize: isMobile ? '20px' : '25px', cursor: 'pointer' }}
      >
        surprise me!
      </span>
    </div>
  );
}
