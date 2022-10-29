import axiosClient from '../../utils/configs/axiosClient'
import { MovieRequest } from '../popular/types'
import { FavoriteRequest, MarkAsFavoriteBody } from './types'

const sessionId: string = localStorage.getItem('sessionId') || ''

export class FavoriteServices {
  markAsFavorite = (favoriteData: MarkAsFavoriteBody): Promise<FavoriteRequest> => {
    return axiosClient.post(
      `account/{account_id}/favorite?api_key=${process.env.REACT_APP_BASE_API_KEY}&session_id=${sessionId}`,
      {
        media_type: favoriteData.mediaType,
        media_id: favoriteData.mediaId,
        favorite: favoriteData.favorite,
      }
    )
  }

  getFavoriteMovies = (): Promise<MovieRequest> => {
    return axiosClient.get(
      `account/{account_id}/favorite/movies?api_key=${process.env.REACT_APP_BASE_API_KEY}&session_id=${sessionId}`
    )
  }
}
