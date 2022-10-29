import { MarkAsFavoriteBody, PayloadFailure, PayloadFavoriteMoviesSuccess } from '../types'
import {
  MARK_AS_FAVORITE_REQUEST,
  MARK_AS_FAVORITE_SUCCESS,
  MARK_AS_FAVORITE_FAILURE,
  GET_FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILURE,
} from './actionTypes'

export const markAsFavoriteRequest = (payload: MarkAsFavoriteBody) => ({
  type: MARK_AS_FAVORITE_REQUEST,
  payload,
})

export const markAsFavoriteSuccess = () => ({
  type: MARK_AS_FAVORITE_SUCCESS,
})

export const markAsFavoriteFailure = (payload: PayloadFailure) => ({
  type: MARK_AS_FAVORITE_FAILURE,
  payload,
})

export const getFavoriteRequest = () => ({
  type: GET_FAVORITE_REQUEST,
})
export const getFavoriteSuccess = (payload: PayloadFavoriteMoviesSuccess) => ({
  type: GET_FAVORITE_SUCCESS,
  payload,
})

export const getFavoriteFailure = (payload: PayloadFailure) => ({
  type: GET_FAVORITE_FAILURE,
  payload,
})

export type Actions =
  | ReturnType<typeof markAsFavoriteRequest>
  | ReturnType<typeof markAsFavoriteSuccess>
  | ReturnType<typeof markAsFavoriteFailure>
  | ReturnType<typeof getFavoriteRequest>
  | ReturnType<typeof getFavoriteSuccess>
  | ReturnType<typeof getFavoriteFailure>
