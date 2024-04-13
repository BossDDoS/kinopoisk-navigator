import FilmList from './../../components/FilmList/FilmList'
import Search from '../../components/Search/Search'
import { useEffect, useState } from 'react'
import { getFilms } from './../../api/getFilms'
import { getSearchedFilms } from '../../api/getSearchedFilms'

import { useDebounce } from './../../helpers/hooks/useDebounce'
import Filter from '../../components/Filter/Filter'

const Main = () => {
  const [displayMode, setDisplayMode] = useState('name')
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

  useEffect(() => {
    const getAllFilms = async () => {
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
    }
    getAllFilms()
  }, [currentPage, limitPage, filters])

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        setIsLoading(true)
        const response = await getSearchedFilms(
          currentPage,
          limitPage,
          debounceKeywords
        )
        setAllFilms(response.docs)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getSearchedMovies()
  }, [currentPage, limitPage, debounceKeywords])

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
      <Filter onFilterChange={handleFilterChange} />
      <Search onSearch={handleSearch} />
      <FilmList
        allFilms={allFilms}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handleChangePagination}
      />
    </main>
  )
}

export default Main
