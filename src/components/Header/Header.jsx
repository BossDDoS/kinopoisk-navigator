import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/' className={styles.link}>
          Кинопоиск навигатор
        </Link>
      </h1>
      <p className={styles.slogan}>
        Погрузись в захватывающий мир киноискусства{' '}
      </p>
    </header>
  )
}

export default Header
