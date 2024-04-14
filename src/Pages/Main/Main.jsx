import FilmList from './../../components/FilmList/FilmList'
import Search from '../../components/Search/Search'
import { useCallback, useEffect, useState } from 'react'
import { getFilms } from './../../api/getFilms'
import { getSearchedFilms } from '../../api/getSearchedFilms'
import { Checkbox } from 'antd'
import { useDebounce } from './../../helpers/hooks/useDebounce'
import Filter from '../../components/Filter/Filter'
import styles from './styles.module.css'

const Main = () => {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPage, setLimitPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [allFilms, setAllFilms] = useState([])
  const [filters, setFilters] = useState({
    year: '',
    country: '',
    rating: '',
  })
  const [keywords, setKeywords] = useState('')
  const debounceKeywords = useDebounce(keywords, 1000)

  const getAllFilms = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await getFilms(currentPage, limitPage, { ...filters })
      setAllFilms(response?.docs)
      setTotalPages(response?.pages)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [currentPage, limitPage, filters])

  const getSearchedMovies = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await getSearchedFilms(
        currentPage,
        limitPage,
        debounceKeywords
      )
      setAllFilms(response.docs)
      setTotalPages(response?.pages)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [currentPage, limitPage, debounceKeywords])

  useEffect(() => {
    if (!isActive) {
      getSearchedMovies()
    } else {
      getAllFilms()
    }
  }, [
    currentPage,
    limitPage,
    filters,
    debounceKeywords,
    isActive,
    getAllFilms,
    getSearchedMovies,
  ])

  const handleChangePagination = (currentPage, pageSize) => {
    setCurrentPage(currentPage)
    setLimitPage(pageSize)
  }

  const handleFilterChange = (criteria) => {
    setFilters(criteria)
  }

  const handleSearch = (keyword) => {
    setKeywords(keyword)
  }

  return (
    <main>
      <div className={styles.main}>
        <Checkbox
          type='checkbox'
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
          className={styles.checkbox}
        >
          Переключить на поиск по фильтрам:
        </Checkbox>
        <Filter
          onFilterChange={handleFilterChange}
          isActive={isActive}
          setCurrentPage={setCurrentPage}
        />
        <Search
          onSearch={handleSearch}
          isActive={isActive}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <FilmList
        allFilms={allFilms}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        handleChangePagination={handleChangePagination}
        limitPage={limitPage}
        setCurrentPage={setCurrentPage}
        setLimitPage={setLimitPage}
      />
    </main>
  )
}

export default Main
