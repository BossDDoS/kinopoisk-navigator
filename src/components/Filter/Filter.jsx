import { useCallback, useEffect, useState } from 'react'
import { getCountries } from '../../api/getCountries'
import styles from './styles.module.css'

const Filter = ({ onFilterChange, isActive, setCurrentPage }) => {
  const [countries, setCountries] = useState([])

  const getCountriesSelect = useCallback(async () => {
    try {
      const response = await getCountries()
      setCountries(response)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCountriesSelect()
  }, [getCountriesSelect])

  const [criterias, setCriterias] = useState({
    year: '',
    country: '',
    rating: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newCriterias = { ...criterias, [name]: value }
    setCriterias(newCriterias)
    onFilterChange(newCriterias)
    setCurrentPage(1)
  }

  return (
    <div
      className={styles.container}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      <h2 className={styles.heading}>Поиск по фильтрам:</h2>
      <div className={styles.filter}>
        <label htmlFor='year' className={styles.label}>
          Десятилетие:
        </label>
        <select
          name='year'
          id='year'
          onChange={handleChange}
          className={styles.select}
        >
          <option value=''>Все года</option>
          <option value='2020-2050'>Современное кино</option>
          <option value='2010-2019'>2010-ые</option>
          <option value='2000-2009'>2000-ые</option>
          <option value='1990-1999'>1990-ые</option>
          <option value='1980-1989'>1980-ые</option>
          <option value='1970-1979'>1970-ые</option>
          <option value='1960-1969'>1960-ые</option>
          <option value='1950-1959'>1950-ые</option>
          <option value='1940-1949'>1940-ые</option>
          <option value='1930-1939'>1930-ые</option>
          <option value='1920-1929'>1920-ые</option>
          <option value='1910-1919'>1910-ые</option>
          <option value='1900-1909'>1900-ые</option>
          <option value='1890-1899'>1890-ые</option>
          <option value='1880-1889'>1880-ые</option>
          <option value='1874-1879'>1870-ые</option>
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor='country' className={styles.label}>
          Выберите страну:
        </label>
        <select
          id='country'
          name='country'
          onChange={handleChange}
          className={styles.select}
        >
          <option value=''>Все страны</option>
          {countries.map((country) => (
            <option value={country.name} key={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor='ageRating' className={styles.label}>
          Возрастной рейтинг:
        </label>
        <select
          name='ageRating'
          id='ageRating'
          onChange={handleChange}
          className={styles.select}
        >
          <option value=''>Любой возраст</option>
          <option value='0-6'>Для детей</option>
          <option value='7-12'>Для подростков</option>
          <option value='13-17'>Для молодежи</option>
          <option value='18'>Взрослое кино</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
