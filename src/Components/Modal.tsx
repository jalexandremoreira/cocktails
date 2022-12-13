import * as React from 'react';
import { isMobile } from 'react-device-detect';

import { Drink } from '../types';

interface Props {
  drink: Drink | null;
  favorites: Drink[] | null;
  setFavorites: React.Dispatch<React.SetStateAction<Drink[] | null>>;
  setDrink: React.Dispatch<React.SetStateAction<Drink | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

export default function Modal({
  drink,
  favorites,
  setFavorites,
  setDrink,
  setShowModal,
  showModal,
}: Props) {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  React.useEffect(() => {
    const favoriteIDs = favorites?.map((item) => item.idDrink) ?? [];

    setIsFavorite(favoriteIDs.includes(drink?.idDrink ?? ''));
  }, [favorites, drink]);

  const addToFavorites = () => {
    setIsFavorite(true);
    const favoriteList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites([...(favoriteList ?? []), drink]);
    localStorage.setItem('favorites', JSON.stringify([...favoriteList, drink]));
  };

  const removeFromFavorites = () => {
    setIsFavorite(false);
    const favoriteList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(
      favoriteList.filter(
        (favorite: Drink) => favorite.idDrink !== drink?.idDrink
      )
    );
    const updatedFavorites = favoriteList.filter(
      (favorite: Drink) => favorite.idDrink !== drink?.idDrink
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const modalWidth = isMobile ? '90vw' : '650px';
  const modalHeight = isMobile ? '85vh' : '80vh';

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
        fontSize: isMobile ? 16 : 18,
        marginBottom: isMobile ? '10px' : '15px',
        marginRight: '8px',
        padding: isMobile ? '3px 10px' : '5px 13px',
      }}
    >
      {text}
    </div>
  );

  if (showModal === true)
    return (
      <div
        id="modal-background"
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
        onClick={() => {
          setDrink(null);
          setShowModal(false);
        }}
      >
        <div
          id="modal-container"
          style={{
            backgroundColor: '#0e0d0d',
            border: 'solid 1px #ede5e5',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            height: modalHeight,
            justifyContent: 'space-between',
            overflow: 'hidden',
            position: 'relative',
            width: modalWidth,
          }}
        >
          <img
            onClick={(e) => e.stopPropagation()}
            src={drink?.strDrinkThumb ?? ''}
            alt={drink?.strDrink ?? 'background image'}
            style={{
              position: 'absolute',
              top: '-5%',
              width: modalWidth,
              zIndex: 1,
            }}
          />
          <div
            id="modal-button-container"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-end',
              padding: isMobile ? '20px' : '30px',
              position: 'relative',
              right: 0,
              width: '100%',
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              id="modal-buttons"
              style={{
                alignItems: 'center',
                background: 'rgba(14, 13, 13, 0.5)',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'row',
                height: 'fit-content',
                justifyContent: 'center',
                padding: '6px',
                zIndex: 10,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                id="modal-favorites-button"
                style={{
                  cursor: 'pointer',
                  marginRight: isMobile ? '10px' : '15px',
                }}
                onClick={() => {
                  if (isFavorite) {
                    removeFromFavorites();
                  } else {
                    addToFavorites();
                  }
                }}
                width={isMobile ? '20' : '30'}
                height={isMobile ? '20' : '30'}
                // viewBox={'0 0 50 50'}
                viewBox={isFavorite ? '0 0 50 50' : '0 0 35 35'}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isFavorite ? (
                  <path
                    d="M10.4166 43.75V10.4167C10.4166 9.27083 10.825 8.28958 11.6416 7.47292C12.4569 6.65764 13.4375 6.25 14.5833 6.25H35.4166C36.5625 6.25 37.5437 6.65764 38.3604 7.47292C39.1757 8.28958 39.5833 9.27083 39.5833 10.4167V43.75L25 37.5L10.4166 43.75Z"
                    fill="#EDE5E5"
                  />
                ) : (
                  <path
                    d="M7.29169 30.625V7.29167C7.29169 6.48958 7.57752 5.80271 8.14919 5.23104C8.71988 4.66035 9.40627 4.375 10.2084 4.375H18.9584V7.29167H10.2084V26.1771L17.5 23.0417L24.7917 26.1771V16.0417H27.7083V30.625L17.5 26.25L7.29169 30.625ZM10.2084 7.29167H18.9584H17.5H10.2084ZM24.7917 13.125V10.2083H21.875V7.29167H24.7917V4.375H27.7083V7.29167H30.625V10.2083H27.7083V13.125H24.7917Z"
                    fill="#EDE5E5"
                  />
                )}
              </svg>
              <svg
                id="modal-close-button"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDrink(null);
                  setShowModal(false);
                }}
                width={isMobile ? '20' : '30'}
                height={isMobile ? '20' : '30'}
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L13.5 13.5M13.5 13.5L25 25M13.5 13.5L25 2M13.5 13.5L2 25"
                  stroke="#EDE5E5"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          <div
            id="modal-content"
            style={{
              backgroundColor: '#0e0d0d',
              boxSizing: 'border-box',
              display: 'flex',
              flex: isMobile ? 4 : 2,
              flexDirection: 'column',
              height: 'auto',
              justifyContent: 'space-between',
              overflow: 'auto',
              padding: isMobile ? '20px' : '30px',
              position: 'relative',
              width: modalWidth,
              zIndex: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <div
                id="content-header"
                style={{
                  alignItems: 'baseline',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginBottom: isMobile ? '10px' : '20px',
                  maxWidth: modalWidth,
                  position: 'relative',
                  width: '100%',
                }}
              >
                <span
                  className="AbrilFatface white"
                  style={{ fontSize: '50px' }}
                >
                  {drink?.strDrink}
                </span>
                <span className="white" style={{ fontSize: '25px' }}>
                  {drink?.strAlcoholic}
                </span>
              </div>

              <div
                style={{
                  alignItems: 'baseline',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  maxWidth: modalWidth,
                  position: 'relative',
                  width: '100%',
                }}
              >
                <div
                  id="ingredients"
                  style={{
                    alignItems: 'baseline',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    marginBottom: isMobile ? '10px' : '20px',
                    position: 'relative',
                    width: isMobile ? '100%' : '40%',
                  }}
                >
                  <span
                    className="white textMargin"
                    style={{ fontSize: '20px' }}
                  >
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
                          •&nbsp;
                          {ingredientAmounts[index] &&
                            `${ingredientAmounts[index].toLowerCase()} `}
                          {ingredient}
                        </span>
                      );
                  })}
                </div>

                <div
                  id="instructions"
                  style={{
                    alignItems: 'baseline',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    position: 'relative',
                    width: isMobile ? '100%' : '55%',
                  }}
                >
                  <span
                    className="white textMargin"
                    style={{ fontSize: '20px' }}
                  >
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
              </div>
            </div>

            <div
              id="badges"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // marginTop: '50px',
                width: '100%',
              }}
            >
              {drink?.strCategory && (
                <Badge text={`category: ${drink?.strCategory.toLowerCase()}`} />
              )}

              {drink?.strGlass && (
                <Badge text={`glass: ${drink?.strGlass.toLowerCase()}`} />
              )}

              {drink?.strDrinkAlternate && (
                <Badge text={drink?.strDrinkAlternate.toLowerCase()} />
              )}

              {drink?.strTags && <Badge text={drink?.strTags.toLowerCase()} />}
            </div>
          </div>
        </div>
      </div>
    );

  return null;
}
