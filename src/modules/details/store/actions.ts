import { PayloadFailure } from '../../popular/types'
import {
  PayloadMovieDetailsSuccess,
  PayloadMovieKeyWordsSuccess,
  PayloadMovieVideoSuccess,
} from '../types'
import {
  MOVIE_DETAILS_FAILURE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_KEY_WORDS_FAILURE,
  MOVIE_KEY_WORDS_REQUEST,
  MOVIE_KEY_WORDS_SUCCESS,
  MOVIE_VIDEO_FAILURE,
  MOVIE_VIDEO_REQUEST,
  MOVIE_VIDEO_SUCCESS,
} from './actionTypes'

export const getMovieDetailsRequest = (movieId: number) => ({
  type: MOVIE_DETAILS_REQUEST,
  payload: movieId,
})
export const getMovieDetailsSuccess = (payload: PayloadMovieDetailsSuccess) => ({
  type: MOVIE_DETAILS_SUCCESS,
  payload,
})
export const getMovieDetailsFailure = (payload: PayloadFailure) => ({
  type: MOVIE_DETAILS_FAILURE,
  payload,
})

export const getMovieKeyWordsRequest = (movieId: number) => ({
  type: MOVIE_KEY_WORDS_REQUEST,
  payload: movieId,
})
export const getMovieKeyWordsSuccess = (payload: PayloadMovieKeyWordsSuccess) => ({
  type: MOVIE_KEY_WORDS_SUCCESS,
  payload,
})
export const getMovieKeyWordsFailure = (payload: PayloadFailure) => ({
  type: MOVIE_KEY_WORDS_FAILURE,
  payload,
})

export const getMovieVideoRequest = (movieId: number) => ({
  type: MOVIE_VIDEO_REQUEST,
  payload: movieId,
})
export const getMovieVideoSuccess = (payload: PayloadMovieVideoSuccess) => ({
  type: MOVIE_VIDEO_SUCCESS,
  payload,
})
export const getMovieVideoFailure = (payload: PayloadFailure) => ({
  type: MOVIE_VIDEO_FAILURE,
  payload,
})

export type Actions =
  | ReturnType<typeof getMovieDetailsRequest>
  | ReturnType<typeof getMovieDetailsSuccess>
  | ReturnType<typeof getMovieDetailsFailure>
  | ReturnType<typeof getMovieKeyWordsRequest>
  | ReturnType<typeof getMovieKeyWordsSuccess>
  | ReturnType<typeof getMovieKeyWordsFailure>
  | ReturnType<typeof getMovieVideoRequest>
  | ReturnType<typeof getMovieVideoSuccess>
  | ReturnType<typeof getMovieVideoFailure>
