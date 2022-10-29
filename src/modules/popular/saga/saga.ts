import { call, put } from 'redux-saga/effects'
import { PopularServices } from '../services'
import { getPopularFailure, getPopularRequest, getPopularSuccess } from '../store/actions'
import { transformMoviesData } from '../transformData'
import { MovieRequest } from '../types'

const popularServices = new PopularServices()

export function* getPopular({ payload }: ReturnType<typeof getPopularRequest>) {
  try {
    const data: MovieRequest = yield call(popularServices.getPopularMovies, payload)
    const dataToStore = transformMoviesData(data.results)
    yield put(
      getPopularSuccess({ films: dataToStore, page: data.page, totalPages: data.total_pages })
    )
  } catch (error) {
    yield put(getPopularFailure({ errorMessage: 'Failed req get popular movies!' }))
  }
}
