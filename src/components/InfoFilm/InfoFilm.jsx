import styles from './styles.module.css'

const InfoFilm = ({ film }) => {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img
          src={film?.poster?.url || film?.poster?.previewUrl}
          alt=''
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.flex}>
          <h1 className={styles.spaceRight}>{film.name}</h1>
          <p>PG-{film?.ageRating}</p>
        </div>
        <h3>{film.alternativeName}</h3>
        <p className={styles.space}>Год производства: {film.year}</p>
        <p className={styles.description}>{film.description}</p>
      </div>
    </div>
  )
}

export default InfoFilm
