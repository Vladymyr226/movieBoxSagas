import { SagaIterator } from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'
import {
  MOVIE_DETAILS_REQUEST,
  MOVIE_KEY_WORDS_REQUEST,
  MOVIE_VIDEO_REQUEST,
} from '../store/actionTypes'
import { getMovieDetails, getMovieKeyWords, getMovieTrailer } from './saga'

export function* watchMovieDetailsSaga(): SagaIterator {
  yield all([
    takeEvery(MOVIE_DETAILS_REQUEST, getMovieDetails),
    takeEvery(MOVIE_KEY_WORDS_REQUEST, getMovieKeyWords),
    takeEvery(MOVIE_VIDEO_REQUEST, getMovieTrailer),
  ])
}
