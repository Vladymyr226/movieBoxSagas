import { Selector } from 'react-redux'
import { createSelector } from 'reselect'
import { MovieToStore } from '../popular/types'
import { initialStateFavoriteMovies } from './store/reducer'

export type State = typeof initialStateFavoriteMovies

type StoreFavoriteMovies = {
  favorite: State
}

const selectorFavoriteMovies: Selector<StoreFavoriteMovies, MovieToStore[]> = (state) => {
  return state.favorite.films
}

export const selectorFavoriteStore: Selector<
  StoreFavoriteMovies,
  { favoriteMovies: MovieToStore[] }
> = createSelector([selectorFavoriteMovies], (favoriteMovies) => ({
  favoriteMovies,
}))
