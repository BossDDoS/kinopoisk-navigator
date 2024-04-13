import { Pagination, List } from 'antd'
import FilmItem from '../FilmItem/FilmItem'

const FilmList = ({
  currentPage,
  totalPages,
  allFilms,
  onChange,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Скоро здесь что-то появится...</div>
  }

  return (
    <div>
      <Pagination
        current={currentPage}
        total={totalPages}
        onChange={onChange}
        responsive
      />
      <List
        loading={isLoading}
        itemLayout='vertical'
        size='large'
        dataSource={allFilms}
      >
        {allFilms?.map((film) => (
          <FilmItem film={film} key={film.id} />
        ))}
      </List>
    </div>
  )
}

export default FilmList
