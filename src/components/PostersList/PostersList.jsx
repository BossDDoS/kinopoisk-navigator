import { Carousel } from 'antd'
import Poster from '../Poster/Poster'
import styles from './styles.module.css'

const PostersList = ({ posters }) => {
  return (
    <div className={styles.space}>
      <h3 className={styles.space}>Постеры:</h3>
      <Carousel autoplay>
        {posters.length > 0 ? (
          posters?.map((poster) => <Poster poster={poster} key={poster.id} />)
        ) : (
          <div>Нет информации</div>
        )}
      </Carousel>
    </div>
  )
}

export default PostersList
