import { Pagination, List } from 'antd'
import FilmItem from '../FilmItem/FilmItem'

const FilmList = ({
  currentPage,
  limitPage,
  totalPages,
  allFilms,
  handleChangePagination,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Скоро здесь что-то появится...</div>
  }

  return (
    <div>
      <Pagination
        showSizeChanger
        current={currentPage}
        total={totalPages}
        pageSize={limitPage}
        onChange={handleChangePagination}
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
