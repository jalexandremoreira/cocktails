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
          key={id}
          style={{
            alignItems: 'center',
            border: currentLetter === letter ? 'solid 1px red' : 'none',
            borderRadius: 1000,
            display: 'flex',
            height: '30px',
            justifyContent: 'center',
            width: '30px',
          }}
        >
          <button
            className="white"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              fontWeight: currentLetter === letter ? 'bold' : 'normal',
              padding: '5px',
              cursor: 'pointer',
            }}
            onClick={() => setLetter(currentLetter)}
          >
            {currentLetter}
          </button>
        </div>
      ))}
      <div style={{ margin: 'auto' }} />
    </div>
  );
}
