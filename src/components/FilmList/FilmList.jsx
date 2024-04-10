import { Pagination } from 'antd'

const FilmList = () => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={500} />
    </div>
  )
}

export default FilmList
