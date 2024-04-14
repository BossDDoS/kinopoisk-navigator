import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmById } from './../../api/getFilmById'
import { getFilmImage } from '../../api/getFilmImage'
import { uniqueAndFilteredActors } from '../../helpers/unicActors'
import InfoFilm from '../../components/InfoFilm/InfoFilm'
import ActorsList from '../../components/ActorsList/ActorsList'
import SimilarFilmList from './../../components/SimilarFilmList/SimilarFilmList'
import PostersList from '../../components/PostersList/PostersList'

const SingleFilm = () => {
  const params = useParams()
  const [film, setFilm] = useState({})
  const [actors, setActors] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [posters, setPosters] = useState([])

  const uniqueActors = uniqueAndFilteredActors(actors)

  const getFilm = useCallback(async () => {
    try {
      const response = await getFilmById(params.id)
      setFilm(response)
      setActors(response.persons)
      setSimilarMovies(response.similarMovies)
    } catch (error) {
      console.log(error)
    }
  }, [params.id])

  const getImageFilm = useCallback(async () => {
    try {
      const response = await getFilmImage(1, 10, params.id)
      setPosters(response.docs)
    } catch (error) {
      console.log(error)
    }
  }, [params.id])

  useEffect(() => {
    getFilm()
    getImageFilm()
  }, [params.id, getFilm, getImageFilm])

  return (
    <>
      <InfoFilm film={film} />
      <ActorsList uniqueActors={uniqueActors} />
      <PostersList posters={posters} />
      <SimilarFilmList similarMovies={similarMovies} />
    </>
  )
}

export default SingleFilm
