import { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  container_not_found_page: {
    display: 'grid',
    justifyContent: 'center',
    fontSize: '100px',
  },

  link_not_found_page: {
    display: 'grid',
    justifyContent: 'center',
    fontSize: '70px',
    color: 'black',
    textDecoration: 'none',
    background: 'blueviolet',
  },
}

const NotFoundPage = () => {
  return (
    <div>
      <h1 style={styles.container_not_found_page}> Oops! Page not found!</h1>
      <a style={styles.link_not_found_page} href="/movies/popular">
        Back to home page
      </a>
    </div>
  )
}

export default NotFoundPage
