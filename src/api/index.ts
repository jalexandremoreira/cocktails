import { Drink } from '../types';

const fetchAlphabet = async (letter: string) => {
  let drinks: Drink[] | null = null;

  await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  )
    .then((response) => response.json())
    .then((data) => (drinks = data.drinks));

  return drinks;
};

const fetchByID = async (id: number) => {
  let drink: Drink | null = null;

  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => (drink = data.drinks[0]));

  return drink;
};

// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
// .then((response) => response.json())
// .then((json) => console.log('response', json));

export { fetchAlphabet, fetchByID };
