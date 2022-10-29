import { Reducer } from 'redux'
import { Actions } from './actions'
import { InitialStateMoviesPopular, MovieToStore } from '../types'
import {
  INCREMENT_PAGE,
  MOVIE_POPULAR_FAILURE,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
} from './actionTypes'

export const initialStateMoviesPopular: InitialStateMoviesPopular = {
  films: [] as MovieToStore[],
  isLoading: false,
  page: 1,
  totalPages: 0,
  errorMessage: '',
}

export const reducer: Reducer<InitialStateMoviesPopular, Actions> = (
  state = initialStateMoviesPopular,
  action
): InitialStateMoviesPopular => {
  switch (action.type) {
    case MOVIE_POPULAR_REQUEST:
      return { ...state, isLoading: true }

    case MOVIE_POPULAR_SUCCESS:
      return {
        ...state,
        films: [...state.films, ...action.payload.films],
        isLoading: false,
      }

    case MOVIE_POPULAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case INCREMENT_PAGE:
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        page: state.page! + 1,
      }

    default:
      return state
  }
}
