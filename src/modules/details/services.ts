import routes from '../../routes/route'
import axiosClient from '../../utils/configs/axiosClient'
import { MovieDetailsRequest, MovieKeyWordsRequest, MovieVideoRequest } from './types'

export class DetailsServices {
  getDetails = (id: number): Promise<MovieDetailsRequest> => {
    return axiosClient.get(
      `${routes.movieDetails}${id}?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
  }
  getKeyWords = (id: number): Promise<MovieKeyWordsRequest> => {
    return axiosClient.get(
      `${routes.keyWords}${id}/keywords?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
  }
  getTrailer = (id: number): Promise<MovieVideoRequest> => {
    return axiosClient.get(
      `${routes.keyWords}${id}/videos?api_key=${process.env.REACT_APP_BASE_API_KEY}`
    )
  }
}
