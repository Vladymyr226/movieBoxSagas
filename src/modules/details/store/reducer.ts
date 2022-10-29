import { Reducer } from 'redux'
import { InitialStateMovieDetails, MovieDetailsToStore, words } from '../types'
import { Actions } from './actions'
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

export const initialStateMovieDetails: InitialStateMovieDetails = {
  movieDetails: {} as MovieDetailsToStore,
  errorMessage: '',
  isLoading: false,
  words: [] as words[],
  videoIsLoading: false,
  video: '',
}

export const reducer: Reducer<InitialStateMovieDetails, Actions> = (
  state = initialStateMovieDetails,
  action
): InitialStateMovieDetails => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { ...state, isLoading: true }

    case MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }

    case MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    case MOVIE_KEY_WORDS_REQUEST:
      return { ...state }

    case MOVIE_KEY_WORDS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case MOVIE_KEY_WORDS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }

    case MOVIE_VIDEO_REQUEST:
      return { ...state, videoIsLoading: true }

    case MOVIE_VIDEO_SUCCESS:
      return {
        ...state,
        ...action.payload,
        videoIsLoading: false,
      }

    case MOVIE_VIDEO_FAILURE:
      return {
        ...state,
        videoIsLoading: false,
        errorMessage: action.payload.errorMessage,
      }

    default:
      return state
  }
}

export default reducer
