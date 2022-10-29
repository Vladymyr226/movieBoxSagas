import axiosClient from '../../utils/configs/axiosClient'
import { MovieRequest } from './types'

export class PopularServices {
  getPopularMovies = (currentPage: number): Promise<MovieRequest> => {
    return axiosClient.get(
      `/movie/popular?api_key=${process.env.REACT_APP_BASE_API_KEY}&page=${currentPage}`
    )
  }
}
