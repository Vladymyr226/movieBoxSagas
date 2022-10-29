import { SagaIterator } from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'
import { GET_FAVORITE_REQUEST, MARK_AS_FAVORITE_REQUEST } from '../store/actionTypes'
import { getFavoriteMovies, markMovieAsFavorite } from './saga'

export function* watchFavoriteSaga(): SagaIterator {
  yield all([
    takeEvery(MARK_AS_FAVORITE_REQUEST, markMovieAsFavorite),
    takeEvery(GET_FAVORITE_REQUEST, getFavoriteMovies),
  ])
}
