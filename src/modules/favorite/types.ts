import { MovieToStore } from '../popular/types'

export type FavoriteRequest = {
  media_type: string
  media_id: number
  favorite: boolean
}

export type MarkAsFavoriteBody = {
  mediaType: string
  mediaId: number
  favorite: boolean
}

export type PayloadFavoriteMoviesSuccess = {
  films: MovieToStore[]
}

export type PayloadFailure = {
  errorMessage: string
}

export type InitialStateFavoriteMovies = {
  films: MovieToStore[]
  errorMessage: string
}
