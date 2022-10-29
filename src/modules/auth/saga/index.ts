import { SagaIterator } from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'
import { USER_AUTH_TOKEN_REQUEST } from '../store/actionTypes'
import { getTokenValidateTokenSession } from './saga'

export function* watchUserAuthSaga(): SagaIterator {
  yield all([takeEvery(USER_AUTH_TOKEN_REQUEST, getTokenValidateTokenSession)])
}
