import { CSSProperties, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../../common/components/spinner/Spinner'
import { selectorMovieDetailsStore } from '../selectors'
import {
  getMovieDetailsRequest,
  getMovieKeyWordsRequest,
  getMovieVideoRequest,
} from '../store/actions'
import Details from './Details'
import Trailer from './Trailer'

const styles: Record<string, CSSProperties> = {
  main: {
    paddingLeft: '85px',
  },
  header_video: {
    width: '50%',
    margin: 'auto',
  },
}

const DetailsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { MovieDetails, IsLoadingMovieDetails, MovieVideo, videoIsLoading } =
    useSelector(selectorMovieDetailsStore)

  useEffect(() => {
    if (id) {
      const tmp = parseInt(id)

      dispatch(getMovieDetailsRequest(tmp))
      dispatch(getMovieKeyWordsRequest(tmp))
      dispatch(getMovieVideoRequest(tmp))
    }
  }, [])

  return (
    <>
      <main style={styles.main}>
        {IsLoadingMovieDetails ? (
          <Spinner />
        ) : (
          <>
            <Details
              backdropPath={MovieDetails.backdropPath}
              budget={MovieDetails.budget}
              genres={MovieDetails.genres}
              homepage={MovieDetails.homepage}
              id={MovieDetails.id}
              originalLanguage={MovieDetails.originalLanguage}
              overview={MovieDetails.overview}
              popularity={MovieDetails.popularity}
              revenue={MovieDetails.revenue}
              runtime={MovieDetails.runtime}
              status={MovieDetails.status}
              tagline={MovieDetails.tagline}
              title={MovieDetails.title}
              voteAverage={MovieDetails.voteAverage}
              voteCount={MovieDetails.voteCount}
            />
            {videoIsLoading ? (
              <Spinner />
            ) : (
              <>
                <div style={styles.header_video}>
                  <h2>Трейлер</h2>
                  <Trailer videoKey={MovieVideo} />
                </div>
              </>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default DetailsPage
