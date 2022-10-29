import { all } from 'redux-saga/effects'
import { watchUserAuthSaga } from '../auth/saga'
import { watchMovieDetailsSaga } from '../details/saga'
import { watchFavoriteSaga } from '../favorite/saga'
import { watchMoviesPopularSaga } from '../popular/saga'

export function* rootSaga() {
  yield all([
    watchUserAuthSaga(),
    watchMoviesPopularSaga(),
    watchMovieDetailsSaga(),
    watchFavoriteSaga(),
  ])
}
