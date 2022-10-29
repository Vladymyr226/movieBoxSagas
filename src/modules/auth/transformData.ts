import { sessionId, sessionIdRequest, userAuthRequest, userAuthToStore } from './types'

export const transformUserAuthData = (data: userAuthRequest): userAuthToStore => {
  return {
    requestToken: data.request_token,
    success: data.success,
    expiresAt: data.expires_at,
  }
}

export const transformUserAuthSessionId = (data: sessionIdRequest): sessionId => {
  return {
    success: data.success,
    sessionId: data.session_id,
  }
}
