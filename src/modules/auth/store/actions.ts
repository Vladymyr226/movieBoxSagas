import { PayloadFailure, UserData, UserValidateBody } from '../types'
import {
  USER_AUTH_SESSION_ID_FAILURE,
  USER_AUTH_SESSION_ID_REQUEST,
  USER_AUTH_SESSION_ID_SUCCESS,
  USER_AUTH_TOKEN_FAILURE,
  USER_AUTH_TOKEN_REQUEST,
  USER_AUTH_TOKEN_SUCCESS,
  USER_AUTH_VALIDATE_TOKEN_FAILURE,
  USER_AUTH_VALIDATE_TOKEN_REQUEST,
  USER_AUTH_VALIDATE_TOKEN_SUCCESS,
} from './actionTypes'

export const getUserAuthTokenRequest = (payload: UserData) => ({
  type: USER_AUTH_TOKEN_REQUEST,
  payload,
})
export const getUserAuthTokenSuccess = () => ({
  type: USER_AUTH_TOKEN_SUCCESS,
})
export const getUserAuthTokenFailure = (payload: PayloadFailure) => ({
  type: USER_AUTH_TOKEN_FAILURE,
  payload,
})

export const getUserAuthValidateTokenRequest = () => ({
  type: USER_AUTH_VALIDATE_TOKEN_REQUEST,
})
export const getUserAuthValidateTokenSuccess = () => ({
  type: USER_AUTH_VALIDATE_TOKEN_SUCCESS,
})
export const getUserAuthValidateTokenFailure = (payload: PayloadFailure) => ({
  type: USER_AUTH_VALIDATE_TOKEN_FAILURE,
  payload,
})

export const getUserAuthNewSessionRequest = (payload: UserValidateBody) => ({
  type: USER_AUTH_SESSION_ID_REQUEST,
  payload,
})
export const getUserAuthNewSessionSuccess = () => ({ type: USER_AUTH_SESSION_ID_SUCCESS })
export const getUserAuthNewSessionFailure = (payload: PayloadFailure) => ({
  type: USER_AUTH_SESSION_ID_FAILURE,
  payload,
})

export type Actions =
  | ReturnType<typeof getUserAuthTokenRequest>
  | ReturnType<typeof getUserAuthTokenSuccess>
  | ReturnType<typeof getUserAuthTokenFailure>
  | ReturnType<typeof getUserAuthValidateTokenRequest>
  | ReturnType<typeof getUserAuthValidateTokenSuccess>
  | ReturnType<typeof getUserAuthValidateTokenFailure>
  | ReturnType<typeof getUserAuthNewSessionRequest>
  | ReturnType<typeof getUserAuthNewSessionSuccess>
  | ReturnType<typeof getUserAuthNewSessionFailure>
