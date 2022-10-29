import { Reducer } from 'redux'
import { Actions } from './actions'
import { InitialStateFavoriteMovies } from '../types'
import { MovieToStore } from '../../popular/types'
import { GET_FAVORITE_FAILURE, GET_FAVORITE_REQUEST, GET_FAVORITE_SUCCESS } from './actionTypes'

export const initialStateFavoriteMovies: InitialStateFavoriteMovies = {
  films: [] as MovieToStore[],
  errorMessage: '',
}

export const reducer: Reducer<InitialStateFavoriteMovies, Actions> = (
  state = initialStateFavoriteMovies,
  action
): InitialStateFavoriteMovies => {
  switch (action.type) {
    case GET_FAVORITE_REQUEST:
      return { ...state }

    case GET_FAVORITE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case GET_FAVORITE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }

    default:
      return state
  }
}
