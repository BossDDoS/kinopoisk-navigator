import axios from 'axios'

const API_KEY = process.env.REACT_APP_TOKEN
const BASE_URL = 'https://api.kinopoisk.dev/v1.4/'

export const getFilmById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
