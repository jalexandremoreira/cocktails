import * as React from 'react';
import { isMobile } from 'react-device-detect';

import { Drink } from '../types';

interface Props {
  drink: Drink | null;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ drink, showModal, setShowModal }: Props) {
  const modalWidth = isMobile ? '90vw' : '650px';
  const modalHeight = isMobile ? '85vh' : '80vh';

  console.log(drink);
  const ingredients: string[] = [
    drink?.strIngredient1 ?? '',
    drink?.strIngredient2 ?? '',
    drink?.strIngredient3 ?? '',
    drink?.strIngredient4 ?? '',
    drink?.strIngredient5 ?? '',
    drink?.strIngredient6 ?? '',
    drink?.strIngredient7 ?? '',
    drink?.strIngredient8 ?? '',
    drink?.strIngredient9 ?? '',
    drink?.strIngredient10 ?? '',
    drink?.strIngredient11 ?? '',
    drink?.strIngredient12 ?? '',
    drink?.strIngredient13 ?? '',
    drink?.strIngredient14 ?? '',
    drink?.strIngredient15 ?? '',
  ] ?? [''];

  const ingredientAmounts: string[] = [
    drink?.strMeasure1 ?? '',
    drink?.strMeasure2 ?? '',
    drink?.strMeasure3 ?? '',
    drink?.strMeasure4 ?? '',
    drink?.strMeasure5 ?? '',
    drink?.strMeasure6 ?? '',
    drink?.strMeasure7 ?? '',
    drink?.strMeasure8 ?? '',
    drink?.strMeasure9 ?? '',
    drink?.strMeasure10 ?? '',
    drink?.strMeasure11 ?? '',
    drink?.strMeasure12 ?? '',
    drink?.strMeasure13 ?? '',
    drink?.strMeasure14 ?? '',
    drink?.strMeasure15 ?? '',
  ] ?? [''];

  const Badge = ({ text }: { text: string }) => (
    <div
      className="white"
      style={{
        backgroundColor: '#E06C19',
        borderRadius: 100,
        fontSize: 16,
        padding: '3px 10px',
        marginRight: '8px',
      }}
    >
      {text}
    </div>
  );

  if (showModal === true)
    return (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
        }}
        onClick={() => setShowModal(false)}
      >
        <div
          id="modal-container"
          style={{
            backgroundColor: '#0e0d0d',
            border: 'solid 1px #ede5e5',
            overflow: 'hidden',
            position: 'relative',
            width: modalWidth,
            height: modalHeight,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              position: 'relative',
              zIndex: 10,
              justifyContent: 'flex-end',
              padding: '30px',
              right: 0,
              width: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              style={{ cursor: 'pointer' }}
              onClick={() => setShowModal(false)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L13.5 13.5M13.5 13.5L25 25M13.5 13.5L25 2M13.5 13.5L2 25"
                stroke="#EDE5E5"
              />
            </svg>
          </div>
          <img
            onClick={(e) => e.stopPropagation()}
            src={drink?.strDrinkThumb ?? ''}
            alt={drink?.strDrink ?? 'alt'}
            style={{
              position: 'absolute',
              top: '-20%',
              width: modalWidth,
              zIndex: 1,
            }}
          />

          <div
            id="modal-content"
            style={{
              alignItems: 'center',
              backgroundColor: '#0e0d0d',
              display: 'inline-block',
              flexDirection: 'column',
              height: 'auto',
              marginTop: '45%',
              overflow: 'auto',
              position: 'relative',
              width: modalWidth,
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                alignItems: 'baseline',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                maxWidth: modalWidth,
                padding: '30px 30px 0px 30px',
                position: 'relative',
                width: '100%',
              }}
            >
              <span className="white" style={{ fontSize: '50px' }}>
                {drink?.strDrink}
              </span>
              <span className="white" style={{ fontSize: '25px' }}>
                {drink?.strAlcoholic}
              </span>
            </div>

            <div style={{ height: '25px' }} />

            <div
              style={{
                alignItems: 'baseline',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                maxWidth: modalWidth,
                padding: '0 30px',
                position: 'relative',
                width: '100%',
              }}
            >
              <div
                style={{
                  alignItems: 'baseline',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  position: 'relative',
                  width: '40%',
                }}
              >
                <span className="white textMargin" style={{ fontSize: '20px' }}>
                  ingredients:
                </span>
                {ingredients.map((ingredient, index) => {
                  if (ingredient !== '' && ingredient !== null)
                    return (
                      <span
                        key={index}
                        className="white textMargin"
                        style={{ fontSize: '20px' }}
                      >
                        •&nbsp;{ingredientAmounts[index].toLowerCase()}&nbsp;
                        {ingredient}
                      </span>
                    );
                })}
              </div>
              <div
                style={{
                  alignItems: 'baseline',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  position: 'relative',
                  width: '55%',
                }}
              >
                <span className="white textMargin" style={{ fontSize: '20px' }}>
                  instructions:
                </span>

                {drink && (
                  <span
                    className="white textMargin"
                    style={{ fontSize: '20px' }}
                  >
                    {drink?.strInstructions}
                  </span>
                )}
              </div>

              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: '50px',
                  width: '100%',
                }}
              >
                {drink?.strCategory && (
                  <Badge
                    text={`category: ${drink?.strCategory.toLowerCase()}`}
                  />
                )}
                {drink?.strGlass && (
                  <Badge text={`glass: ${drink?.strGlass.toLowerCase()}`} />
                )}
                {drink?.strDrinkAlternate && (
                  <Badge text={drink?.strDrinkAlternate.toLowerCase()} />
                )}
                {drink?.strTags && (
                  <Badge text={drink?.strTags.toLowerCase()} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return null;
}
