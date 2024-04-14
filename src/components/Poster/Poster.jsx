import styles from './styles.module.css'

const Poster = ({ poster }) => {
  return (
    <div className={styles.container}>
      <img
        src={poster?.previewUrl}
        alt='Постер фильма'
        className={styles.poster}
      />
    </div>
  )
}

export default Poster
