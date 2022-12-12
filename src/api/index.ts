const fetchAlphabet = async (letter: string) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.drinks;
    });
};

const fetchByID = async (id: number) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.drinks[0];
    });
};

export { fetchAlphabet, fetchByID };
