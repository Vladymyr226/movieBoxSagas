import { SagaIterator } from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'
import { MOVIE_POPULAR_REQUEST } from '../store/actionTypes'
import { getPopular } from './saga'

export function* watchMoviesPopularSaga(): SagaIterator {
  yield all([takeEvery(MOVIE_POPULAR_REQUEST, getPopular)])
}
