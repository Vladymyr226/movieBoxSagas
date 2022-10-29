export type MovieDetailsRequest = {
  backdrop_path: string
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  original_language: string
  overview: string
  popularity: number
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export type MovieDetailsToStore = {
  backdropPath: string
  budget: number
  genres: { id?: number; name: string }[]
  homepage: string
  id: number
  originalLanguage: string
  overview: string
  popularity: number
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  voteAverage: number
  voteCount: number
}

export type PayloadMovieDetailsSuccess = {
  movieDetails: MovieDetailsToStore
}

export type words = {
  name: string
}

export type PayloadMovieKeyWordsSuccess = {
  words: words[]
}

export type MovieKeyWordsRequest = {
  keywords: [{ name: string }]
}

export type InitialStateMovieDetails = {
  movieDetails: MovieDetailsToStore
  errorMessage: string
  isLoading: boolean
  words: words[]
  videoIsLoading: boolean
  video: string
}

export type MovieVideoRequest = {
  results: [{ key: string }]
}
export type PayloadMovieVideoSuccess = {
  video: string
}
