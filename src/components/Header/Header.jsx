import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Кинопоиск навигатор</h1>
      <p className={styles.slogan}>
        Погрузись в захватывающий мир киноискусства{' '}
      </p>
    </header>
  )
}

export default Header
