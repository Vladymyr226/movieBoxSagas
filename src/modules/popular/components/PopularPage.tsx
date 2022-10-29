import React, { CSSProperties } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../common/components/Card'
import Spinner from '../../../common/components/spinner/Spinner'
import routes from '../../../routes/route'
import { selectorFavoriteStore } from '../../favorite/selectors'
import { getFavoriteRequest } from '../../favorite/store/actions'
import { selectorPopularStore } from '../selectors'
import { getPopularRequest, incrementPage } from '../store/actions'
import { InView } from 'react-intersection-observer'

const styles: Record<string, CSSProperties> = {
  header_type_films: {
    display: 'inline-flex',
    paddingLeft: '900px',
  },
  main_container_cards: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingLeft: '70px',
  },
}

const PopularPage = () => {
  const dispatch = useDispatch()

  const { popularFilms, currentPagePopular } = useSelector(selectorPopularStore)
  const { favoriteMovies } = useSelector(selectorFavoriteStore)

  const favoriteMoviesIds = favoriteMovies.length ? favoriteMovies.map((item) => item.id) : []

  useEffect(() => {
    dispatch(getPopularRequest(1))
    dispatch(incrementPage())

    if (!favoriteMovies.length) {
      dispatch(getFavoriteRequest())
    }
  }, [])

  return (
    <>
      <main>
        <div style={styles.header_type_films}>
          <h2>Популярно</h2>
        </div>

        <div style={styles.main_container_cards}>
          {popularFilms?.map((film, index) => (
            <React.Fragment key={`Popular-${index}`}>
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

      {popularFilms.length && currentPagePopular > 1 && currentPagePopular < 34638 && (
        <InView
          as="div"
          onChange={(inView) => {
            if (inView) {
              dispatch(incrementPage())
              dispatch(getPopularRequest(currentPagePopular))
            }
          }}
        >
          <Spinner />
        </InView>
      )}
    </>
  )
}

export default PopularPage
