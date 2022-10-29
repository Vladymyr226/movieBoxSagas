import React, { CSSProperties } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../common/components/Card'
import routes from '../../../routes/route'
import { selectorFavoriteStore } from '../selectors'
import { getFavoriteRequest } from '../store/actions'

const styles: Record<string, CSSProperties> = {
  header_type_films: {
    display: 'inline-flex',
    flexDirection: 'column',
    paddingLeft: '700px',
  },
  main_container_cards: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingLeft: '90px',
  },
}

const FavoritePage = () => {
  const dispatch = useDispatch()

  const { favoriteMovies } = useSelector(selectorFavoriteStore)

  const favoriteMoviesIds = favoriteMovies.length ? favoriteMovies.map((item) => item.id) : []

  useEffect(() => {
    dispatch(getFavoriteRequest())
  }, [])

  return (
    <>
      <main>
        <div style={styles.header_type_films}>
          {favoriteMovies.length ? (
            <h2>Избранное</h2>
          ) : (
            <>
              <h2>Упс! Список избранных фильмов пуст. Наполните его фильмами :)</h2>
            </>
          )}
        </div>
        <br />
        <div style={styles.main_container_cards}>
          {favoriteMovies?.map((film, index) => (
            <React.Fragment key={`Favorite-${index}`}>
              <Card
                id={film.id}
                backdropPath={
                  !film.backdropPath
                    ? '/img/no_photo_w220_h330.jpg'
                    : routes.images + film.backdropPath
                }
                title={film.title}
                releaseDate={film.releaseDate}
                favoriteMoviesIds={favoriteMoviesIds}
              />
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  )
}

export default FavoritePage
