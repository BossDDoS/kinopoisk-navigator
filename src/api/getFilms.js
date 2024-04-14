import axios from 'axios'

const API_KEY = process.env.REACT_APP_TOKEN
const BASE_URL = 'https://api.kinopoisk.dev/v1.4/'

export const getFilms = async (page, limit, selectFields) => {
  try {
    function buildQueryString(params) {
      let queryString = ''

      for (const key in params) {
        if (
          params.hasOwnProperty(key) &&
          params[key] !== undefined &&
          params[key] !== null &&
          params[key] !== '' &&
          key !== 'selectFields'
        ) {
          if (!isNaN(params[key])) {
            const queryKey = key === 'country' ? 'countries.name' : key
            queryString += `${encodeURIComponent(
              queryKey
            )}=${encodeURIComponent(params[key])}&`
          } else {
            const queryKey = key === 'country' ? 'countries.name' : key
            queryString += `${encodeURIComponent(
              queryKey
            )}=${encodeURIComponent(params[key])}&`
          }
        }
      }

      if (queryString.length > 0) {
        queryString = queryString.slice(0, -1)
      }

      if (queryString !== '') {
        queryString = `&selectFields=&${queryString}`
      }

      return queryString
    }

    const response = await axios.get(
      `${BASE_URL}movie?page=${page}&limit=${limit}${buildQueryString(
        selectFields
      )}`,
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
