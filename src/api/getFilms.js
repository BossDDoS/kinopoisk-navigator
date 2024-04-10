import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_API_URL

export const getAllFilms = async (page, limit) => {
  try {
    const response = await axios.get(`${BASE_URL}movie`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        page,
        limit,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
