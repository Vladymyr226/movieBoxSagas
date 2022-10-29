import { Selector } from 'react-redux'
// import { State } from './store/reducer'
import { createSelector } from 'reselect'
import { initialStateMoviesPopular } from './store/reducer'
import { MovieToStore } from './types'

export type State = typeof initialStateMoviesPopular

type StorePopularFilms = {
  popular: State
}

const selectorFilms: Selector<StorePopularFilms, MovieToStore[]> = (state) => {
  return state.popular.films
}

const selectorIsLoading: Selector<StorePopularFilms, boolean> = (state) => {
  return state.popular.isLoading
}

const selectorCurrentPage: Selector<StorePopularFilms, number> = (state) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return state.popular.page!
}

export const selectorPopularStore: Selector<
  StorePopularFilms,
  { popularFilms: MovieToStore[]; IsLoadingMoviesPopular: boolean; currentPagePopular: number }
> = createSelector(
  [selectorFilms, selectorIsLoading, selectorCurrentPage],
  (popularFilms, IsLoadingMoviesPopular, currentPagePopular) => ({
    popularFilms,
    IsLoadingMoviesPopular,
    currentPagePopular,
  })
)
