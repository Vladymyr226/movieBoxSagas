import { Selector } from 'react-redux'
import { createSelector } from 'reselect'
import { initialStateMovieDetails } from './store/reducer'
import { MovieDetailsToStore, words } from './types'

export type State = typeof initialStateMovieDetails

type StoreMovieDetails = {
  details: State
}

const selectorIsLoading: Selector<StoreMovieDetails, boolean> = (state) => {
  return state.details.isLoading
}

const selectorMovieDetails: Selector<StoreMovieDetails, MovieDetailsToStore> = (state) => {
  return state.details.movieDetails
}

const selectorMovieKeyWords: Selector<StoreMovieDetails, words[]> = (state) => {
  return state.details.words
}

const selectorVideoIsLoading: Selector<StoreMovieDetails, boolean> = (state) => {
  return state.details.videoIsLoading
}
const selectorMovieVideo: Selector<StoreMovieDetails, string> = (state) => {
  return state.details.video
}

export const selectorMovieDetailsStore: Selector<
  StoreMovieDetails,
  {
    MovieDetails: MovieDetailsToStore
    IsLoadingMovieDetails: boolean
    MovieVideo: string
    videoIsLoading: boolean
    keyWords: words[]
  }
> = createSelector(
  [
    selectorMovieDetails,
    selectorIsLoading,
    selectorMovieKeyWords,
    selectorMovieVideo,
    selectorVideoIsLoading,
  ],

  (MovieDetails, IsLoadingMovieDetails, keyWords, MovieVideo, videoIsLoading) => ({
    MovieDetails,
    IsLoadingMovieDetails,
    keyWords,
    MovieVideo,
    videoIsLoading,
  })
)
