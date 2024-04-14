import { Pagination } from 'antd'
import styles from './styles.module.css'

const ActorsList = ({ uniqueActors }) => {
  return (
    <div className={styles.space}>
      <h3 className={styles.space}>Актерский состав</h3>
      <ul>
        {uniqueActors.map((actors) => (
          <li key={actors.id}>{actors.name}</li>
        ))}
      </ul>
      {uniqueActors.length > 10 ? (
        <Pagination defaultCurrent={1} total={uniqueActors.length} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default ActorsList
