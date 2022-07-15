import axios from 'axios';

async function fetchMoviesKeyword(keyword) {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';

  const options = new URLSearchParams ({
      api_key: '6d25a4756e0ff1ccca3eba13a74efa5c',
      query: keyword,  
  }) 

  return await axios.get(`?${options}`)
}

