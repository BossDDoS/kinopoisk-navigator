import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const getCountries = async () => {
  try {
    const response = await axios.get(
      `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name`,
      {
        headers: {
          'X-API-KEY': API_KEY,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
