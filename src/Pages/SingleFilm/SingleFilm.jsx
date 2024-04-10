import { useParams, Link } from 'react-router-dom'
import { getFilmById } from './../../api/getFilmById'
import { useEffect, useState } from 'react'

const SingleFilm = () => {
  const params = useParams()
  const [film, setFilm] = useState({})

  useEffect(() => {
    const getFilm = async () => {
      try {
        const response = await getFilmById(params.id)
        setFilm(response)
      } catch (error) {
        console.log(error)
      }
    }
    getFilm()
  }, [params.id])

  return (
    <>
      <div>
        <Link to='..' path='relative'>
          Назад
        </Link>
      </div>
      <div>
        <h1>{film.name}</h1>
        <p>{film.description}</p>
        <p>PG-{film.ageRating}</p>
        <ul>Actors</ul>
        <div>Series list</div>
        <div>Comments</div>
        <div>Posters</div>
        <div>Carousel</div>
      </div>
    </>
  )
}

export default SingleFilm
