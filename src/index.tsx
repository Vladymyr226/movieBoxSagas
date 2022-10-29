import ReactDOM from 'react-dom/client'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga } from './modules/root/rootSaga'
import { rootReducer, RootState } from './modules/root/rootReducer'
import SignIn from './modules/auth/components/SignInPage'
import PopularPage from './modules/popular/components/PopularPage'
import FavoritePage from './modules/favorite/components/FavoritePage'
import './style/reset.css'
import PrivateRoutes from './hoc/PrivateRoutes'
import NotFoundPage from './common/components/NotFoundPage'
import DetailsPage from './modules/details/components/DetailsPage'
import Layout from './common/components/Layout'

const saga = createSagaMiddleware()
export const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
)
saga.run(rootSaga)

const routes = {
  layout: '/',
  popular: 'movies/popular',
  details: 'movie/id=:id',
  favorite: '/movies/favourites',
}

const renderComponents = [
  { path: routes.popular, component: <PrivateRoutes defaultRoute={<PopularPage />} /> },
  { path: routes.details, component: <PrivateRoutes defaultRoute={<DetailsPage />} /> },
  { path: routes.favorite, component: <PrivateRoutes defaultRoute={<FavoritePage />} /> },
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path={routes.layout} element={<PrivateRoutes defaultRoute={<Layout />} />}>
          {renderComponents.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
