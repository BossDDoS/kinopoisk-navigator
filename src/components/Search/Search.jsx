import { useState } from 'react'
import styles from './styles.module.css'
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const Search = ({ onSearch, isActive, setCurrentPage }) => {
  const [keyword, setKeyword] = useState('')

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
    onSearch(e.target.value)
    setCurrentPage(1)
  }

  const clearSearch = () => {
    setKeyword('')
    onSearch('')
  }

  return (
    <div
      className={styles.search}
      style={{ display: isActive ? 'none' : 'flex' }}
    >
      <Input
        className={styles.input}
        type='text'
        value={keyword}
        onChange={handleSearchChange}
        placeholder='Поиск кино...'
      />
      <Button
        onClick={clearSearch}
        className={styles.button}
        icon={<CloseOutlined />}
      ></Button>
    </div>
  )
}

export default Search
