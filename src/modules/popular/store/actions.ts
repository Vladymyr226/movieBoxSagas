import { PayloadFailure, PayloadMoviesSuccess } from '../types'
import {
  INCREMENT_PAGE,
  MOVIE_POPULAR_FAILURE,
  MOVIE_POPULAR_REQUEST,
  MOVIE_POPULAR_SUCCESS,
} from './actionTypes'

export const getPopularRequest = (payload: number) => ({ type: MOVIE_POPULAR_REQUEST, payload })
export const getPopularSuccess = (payload: PayloadMoviesSuccess) => ({
  type: MOVIE_POPULAR_SUCCESS,
  payload,
})
export const getPopularFailure = (payload: PayloadFailure) => ({
  type: MOVIE_POPULAR_FAILURE,
  payload,
})

export const incrementPage = () => ({
  type: INCREMENT_PAGE,
})

export type Actions =
  | ReturnType<typeof getPopularRequest>
  | ReturnType<typeof getPopularSuccess>
  | ReturnType<typeof getPopularFailure>
  | ReturnType<typeof incrementPage>
