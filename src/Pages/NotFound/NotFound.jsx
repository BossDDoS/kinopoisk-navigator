import styles from './styles.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.notFoundPageTitle}>404 - Страница не найдена</h1>
      <p className={styles.notFoundPageMessage}>
        Извините, запрошенная страница не существует.
      </p>
    </div>
  )
}

export default NotFound
