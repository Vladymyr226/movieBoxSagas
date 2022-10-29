export type userAuthRequest = {
  success: boolean
  expires_at: string
  request_token: string
}
export type userAuthToStore = {
  requestToken: string
  success: boolean
  expiresAt: string
}

export type PayloadFailure = {
  errorMessage: string
}

export type UserValidateBody = {
  userName: string
  password: string
  requestToken: string
}

export type sessionIdRequest = {
  success: boolean
  session_id: string
}

export type sessionId = {
  success: boolean
  sessionId: string
}

export type UserData = {
  userName: string
  password: string
}
