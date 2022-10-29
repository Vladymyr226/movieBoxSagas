import { combineReducers } from 'redux'
import { reducer as popularReducer } from '../popular/store/reducer'
import { reducer as detailsReducer } from '../details/store/reducer'
import { reducer as favoriteReducer } from '../favorite/store/reducer'

export const rootReducer = combineReducers({
  popular: popularReducer,
  details: detailsReducer,
  favorite: favoriteReducer,
})

export type RootState = ReturnType<typeof rootReducer>
