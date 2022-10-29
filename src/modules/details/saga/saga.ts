import { call, put } from 'redux-saga/effects'
import { DetailsServices } from '../services'
import {
  getMovieDetailsFailure,
  getMovieDetailsRequest,
  getMovieDetailsSuccess,
  getMovieKeyWordsFailure,
  getMovieKeyWordsRequest,
  getMovieKeyWordsSuccess,
  getMovieVideoFailure,
  getMovieVideoRequest,
  getMovieVideoSuccess,
} from '../store/actions'
import { transformMovieDetailsData } from '../transformData'
import { MovieDetailsRequest, MovieKeyWordsRequest, MovieVideoRequest } from '../types'

const detailsServices = new DetailsServices()

export function* getMovieDetails({ payload }: ReturnType<typeof getMovieDetailsRequest>) {
  try {
    const data: MovieDetailsRequest = yield call(detailsServices.getDetails, payload)
    const dataToStore = transformMovieDetailsData(data)
    yield put(getMovieDetailsSuccess({ movieDetails: dataToStore }))
  } catch (error) {
    yield put(getMovieDetailsFailure({ errorMessage: 'Failed req get popular movies!' }))
  }
}

export function* getMovieKeyWords({ payload }: ReturnType<typeof getMovieKeyWordsRequest>) {
  try {
    const keyWords: MovieKeyWordsRequest = yield call(detailsServices.getKeyWords, payload)
    yield put(getMovieKeyWordsSuccess({ words: keyWords.keywords }))
  } catch (error) {
    yield put(getMovieKeyWordsFailure({ errorMessage: 'Failed req get key words for movies!' }))
  }
}

export function* getMovieTrailer({ payload }: ReturnType<typeof getMovieVideoRequest>) {
  try {
    const video: MovieVideoRequest = yield call(detailsServices.getTrailer, payload)
    yield put(getMovieVideoSuccess({ video: video.results[0].key }))
  } catch (error) {
    yield put(getMovieVideoFailure({ errorMessage: 'Failed req get trailer for movies!' }))
  }
}
