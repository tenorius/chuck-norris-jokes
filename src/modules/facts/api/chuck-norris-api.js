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
  // response
  // {
  //     "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     "id" : "SeCMmrO6SyacTp58ni71lw",
  //     "url" : "https://api.chucknorris.io/jokes/SeCMmrO6SyacTp58ni71lw"
  //     "value" : "Chuck Norris does not brush his teeth with a toothbrush and toothpaste. instead, he uses steel wool and hydrochloric acid."
  // }
  return res.json();
};
