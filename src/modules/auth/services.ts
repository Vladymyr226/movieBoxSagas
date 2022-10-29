import axiosClient from '../../utils/configs/axiosClient'
import { sessionIdRequest, userAuthRequest, UserValidateBody } from './types'

export class UserServices {
  getToken = (): Promise<userAuthRequest> => {
    return axiosClient.get(
      `/authentication/token/new?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
  }

  getValidateToken = (userData: UserValidateBody): Promise<userAuthRequest> => {
    return axiosClient.post(
      `/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_BASE_API_KEY}`,
      {
        username: userData.userName,
        password: userData.password,
        request_token: userData.requestToken,
      }
    )
  }

  getSessionId = (userData: UserValidateBody): Promise<sessionIdRequest> => {
    return axiosClient.post(
      `authentication/session/new?api_key=${process.env.REACT_APP_BASE_API_KEY}`,
      {
        request_token: userData.requestToken,
      }
    )
  }
}
