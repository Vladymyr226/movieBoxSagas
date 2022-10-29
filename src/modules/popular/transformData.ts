import { MovieRequestResult, MovieToStore } from './types'

export const transformMoviesData = (dataRequest: MovieRequestResult[]): MovieToStore[] => {
  return dataRequest.map((item) => ({
    releaseDate: item.release_date,
    id: item.id,
    title: item.title,
    backdropPath: item.backdrop_path,
  }))
}
