import FilmList from './../../components/FilmList/FilmList'
import { useEffect, useState } from 'react'
import { getAllFilms } from './../../api/getFilms'

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPage, setLimitPage] = useState(10)
  const [allFilms, setAllFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await getAllFilms(currentPage, limitPage)
        setAllFilms(response?.docs)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getFilms()
  }, [currentPage, limitPage])

  return (
    <main>
      {isLoading ? (
        <div>There will be films soon</div>
      ) : (
        <FilmList allFilms={allFilms} />
      )}
    </main>
  )
}

export default Main
