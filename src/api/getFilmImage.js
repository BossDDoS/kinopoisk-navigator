import axios from 'axios'

const API_KEY = process.env.REACT_APP_TOKEN
const BASE_URL = 'https://api.kinopoisk.dev/v1.4/'

export const getFilmImage = async (page, limit, id) => {
  try {
    const response = await axios.get(`${BASE_URL}image`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        page,
        limit,
        movieId: id,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
