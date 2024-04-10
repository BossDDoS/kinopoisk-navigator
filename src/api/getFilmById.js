import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_API_URL

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
