import { useState } from 'react'
import styles from './styles.module.css'

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('')

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
    onSearch(e.target.value)
  }

  const clearSearch = () => {
    setKeyword('')
    onSearch('')
  }

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type='text'
        value={keyword}
        onChange={handleSearchChange}
        placeholder='Поиск кино...'
      />
      <button onClick={clearSearch} className={styles.button}>
        ✖
      </button>
    </div>
  )
}

export default Search
