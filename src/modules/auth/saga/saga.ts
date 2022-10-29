import { call, put } from 'redux-saga/effects'
import { sessionIdRequest, userAuthRequest, UserValidateBody } from '../types'
import { UserServices } from '../services'
import { transformUserAuthData, transformUserAuthSessionId } from '../transformData'
import {
  getUserAuthNewSessionFailure,
  getUserAuthNewSessionRequest,
  getUserAuthNewSessionSuccess,
  getUserAuthTokenFailure,
  getUserAuthTokenSuccess,
  getUserAuthValidateTokenRequest,
  getUserAuthValidateTokenSuccess,
} from '../store/actions'

const authUserService = new UserServices()

export function* getTokenValidateTokenSession({
  payload,
}: ReturnType<typeof getUserAuthNewSessionRequest>) {
  try {
    const data1: userAuthRequest = yield call(authUserService.getToken)
    const { requestToken } = transformUserAuthData(data1)

    if (requestToken) {
      yield put(getUserAuthTokenSuccess())
    }

    const userData: UserValidateBody = {
      ...payload,
      requestToken,
    }

    yield put(getUserAuthValidateTokenRequest())
    const data2: userAuthRequest = yield call(authUserService.getValidateToken, userData)
    if (data2) {
      yield put(getUserAuthValidateTokenSuccess())
    }

    yield put(getUserAuthNewSessionRequest(userData))
    const data3: sessionIdRequest = yield call(authUserService.getSessionId, userData)
    const { sessionId } = transformUserAuthSessionId(data3)
    localStorage.setItem('sessionId', sessionId)

    if (sessionId) {
      yield put(getUserAuthNewSessionSuccess())
      window.location.href = '/movies/popular'
    }
  } catch (error) {
    yield put(getUserAuthTokenFailure({ errorMessage: 'Failed req get user token' }))
    yield put(getUserAuthTokenFailure({ errorMessage: 'Failed request. Not validate auth token!' }))
    yield put(getUserAuthNewSessionFailure({ errorMessage: 'Failed request. Not get session id!' }))
  }
}
