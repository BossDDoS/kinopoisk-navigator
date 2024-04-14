import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const SimilarFilmList = ({ similarMovies }) => {
  return (
    <div className={styles.space}>
      <h3 className={styles.space}>Если вам понравился фильм:</h3>
      <Carousel autoplay>
        {similarMovies?.map((similarMovie) => (
          <div key={similarMovie.id} style={{}}>
            <div className={styles.film}>
              <h4>
                <Link to={`/${similarMovie.id.toString()}`}>
                  {similarMovie.name}
                </Link>
              </h4>
              <p>{similarMovie?.year}</p>
              <div className={styles.container}>
                <Link to={`/${similarMovie.id.toString()}`}>
                  <img
                    src={
                      similarMovie?.poster?.url ||
                      similarMovie?.poster?.previewUrl
                    }
                    alt='Постер фильма'
                    className={styles.image}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SimilarFilmList
