import { Pagination, List } from 'antd'
import FilmItem from '../FilmItem/FilmItem'

const FilmList = ({
  currentPage,
  totalPages,
  allFilms,
  onChange,
  isLoading,
}) => {
  return (
    <div>
      <Pagination
        defaultCurrent={currentPage}
        total={totalPages}
        onChange={onChange}
      />
      <List
        loading={isLoading}
        itemLayout='vertical'
        size='large'
        dataSource={allFilms}
      >
        {allFilms.map((film) => (
          <FilmItem film={film} key={film.id} />
        ))}
      </List>
    </div>
  )
}

export default FilmList
