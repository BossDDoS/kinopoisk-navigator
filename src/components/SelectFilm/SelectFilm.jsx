import styles from './styles.module.css'

const SelectFilm = ({ keywords, setKeywords, setCurrentPage }) => {
  return (
    <div className={styles.search}>
      <input
        type='text'
        placeholder='Введи название фильма'
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  )
}

export default SelectFilm
