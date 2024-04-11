import FilmList from './../../components/FilmList/FilmList'
import SelectFilm from '../../components/SelectFilm/SelectFilm'
import { useEffect, useState } from 'react'
import { getSearchedFilms } from './../../api/getSearchedFilms'
import { useDebounce } from './../../helpers/hooks/useDebounce'

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPage, setLimitPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [allFilms, setAllFilms] = useState([])
  const [keywords, setKeywords] = useState('')
  const debounceKeywords = useDebounce(keywords, 1500)

  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await getSearchedFilms(
          currentPage,
          limitPage,
          debounceKeywords
        )
        setAllFilms(response?.docs)
        setTotalPages(response?.pages)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getFilms()
  }, [currentPage, limitPage, debounceKeywords])

  const onChange = (currentPage, pageSize) => {
    setCurrentPage(currentPage)
    setLimitPage(pageSize)
  }

  return (
    <main>
      <SelectFilm
        keywords={keywords}
        setKeywords={setKeywords}
        setCurrentPage={setCurrentPage}
      />
      <FilmList
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        allFilms={allFilms}
        onChange={onChange}
      />
    </main>
  )
}

export default Main
