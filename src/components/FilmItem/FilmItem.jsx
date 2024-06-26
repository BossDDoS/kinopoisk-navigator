import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const FilmItem = React.memo(({ film }) => {
  return (
    <div className={styles.movieCard}>
      <div>
        <img
          src={film.poster?.previewUrl}
          alt={film?.name}
          className={styles.movieCardImage}
        />
      </div>
      <div className={styles.movieCardInfo}>
        <h2 className={styles.movieCardTitle}>
          <Link to={film.id.toString()}>
            {film?.name || film?.alternativeName}
          </Link>
        </h2>
        <p className={styles.movieCardYear}>Год: {film?.year}</p>
        <p className={styles.movieCardLocation}>
          Страна: {film?.countries[0]?.name}
        </p>
      </div>
    </div>
  )
})

export default FilmItem
