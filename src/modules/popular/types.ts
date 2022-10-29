export type MovieRequestResult = {
  release_date: string
  id: number
  title: string
  backdrop_path: string
}

export type MovieRequest = {
  page: number
  results: MovieRequestResult[]
  total_pages: number
}
export type MovieToStore = {
  releaseDate: string
  id: number
  title: string
  backdropPath: string
}

export type PayloadMoviesSuccess = {
  films: MovieToStore[]
  page: number
  totalPages: number
}

export type PayloadFailure = {
  errorMessage: string
}

export type InitialStateMoviesPopular = {
  films: MovieToStore[]
  isLoading: boolean
  page: number
  totalPages: number
  errorMessage: string
}
