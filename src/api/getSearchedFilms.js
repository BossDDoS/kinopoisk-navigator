import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_API_URL

export const getSearchedFilms = async (page, limit, query) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/search`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        page,
        limit,
        query,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
