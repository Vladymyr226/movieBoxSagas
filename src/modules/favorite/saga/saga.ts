import { call, put } from 'redux-saga/effects'
import { transformMoviesData } from '../../popular/transformData'
import { MovieRequest } from '../../popular/types'
import { FavoriteServices } from '../services'
import {
  markAsFavoriteFailure,
  getFavoriteSuccess,
  markAsFavoriteRequest,
  markAsFavoriteSuccess,
  getFavoriteFailure,
} from '../store/actions'
import { FavoriteRequest } from '../types'

const favoriteServices = new FavoriteServices()

export function* markMovieAsFavorite({ payload }: ReturnType<typeof markAsFavoriteRequest>) {
  try {
    const data: FavoriteRequest = yield call(favoriteServices.markAsFavorite, payload)
    yield put(markAsFavoriteSuccess())
    yield getFavoriteMovies()
  } catch (error) {
    yield put(markAsFavoriteFailure({ errorMessage: 'Failed req set favorite movies!' }))
  }
}

export function* getFavoriteMovies() {
  try {
    const data: MovieRequest = yield call(favoriteServices.getFavoriteMovies)
    const dataToStore = transformMoviesData(data.results)
    yield put(
      getFavoriteSuccess({
        films: dataToStore,
      })
    )
  } catch (error) {
    yield put(getFavoriteFailure({ errorMessage: 'Failed req get favorite movies!' }))
  }
}
