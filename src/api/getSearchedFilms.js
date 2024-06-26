import axios from 'axios'

const API_KEY = process.env.REACT_APP_TOKEN
const BASE_URL = 'https://api.kinopoisk.dev/v1.4/'

export const getSearchedFilms = async (page, limit, query) => {
  try {
    const params = {
      page,
      limit,
    }

    if (query) {
      params.query = query
    }

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')

    const url = query
      ? `${BASE_URL}movie/search?${queryString}`
      : `${BASE_URL}movie?${queryString}`

    const response = await axios.get(url, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
