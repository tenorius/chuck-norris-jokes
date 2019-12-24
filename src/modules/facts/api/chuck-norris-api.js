const apiConfig = {
  url: 'https://api.chucknorris.io/jokes'
};

export const getCategories = async () => {
  const res = await fetch(`${apiConfig.url}/categories`, {
    method: 'GET'
  });
  return res.json();
};

export const getRandomCategoryJoke = async ({ category }) => {
  const res = await fetch(`${apiConfig.url}/random?category=${category}`, {
    method: 'GET'
  });
  return res.json();
};
