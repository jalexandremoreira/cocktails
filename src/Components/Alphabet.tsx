import React from 'react';

export default function Alphabet({
  setLetter,
  letter,
}: {
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  letter: string;
}) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
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
              fontSize: currentLetter === letter ? '21px' : '20px',
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
  );
}
