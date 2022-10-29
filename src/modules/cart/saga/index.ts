import { SagaIterator } from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'

export function* watchCartSaga(): SagaIterator {
  yield all([
    // takeEvery(, ),
    // takeEvery(, ),
  ])
}
