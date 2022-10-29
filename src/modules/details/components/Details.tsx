import { CSSProperties, FC } from 'react'
import { useSelector } from 'react-redux'
import routes from '../../../routes/route'
import { selectorMovieDetailsStore } from '../selectors'
import { MovieDetailsToStore } from '../types'
import './filmDetails.css'

const styles: Record<string, CSSProperties> = {
  container_movie_details: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    backgroundSize: '100% 100%',
    position: 'relative',
  },
  image_movie_details: {
    borderRadius: '10px',
    minWidth: '300px',
    height: '450px',
    width: '100%',
    position: 'relative',
  },
  movie_details: {
    padding: '0px 0px 0px 40px',
    position: 'relative',
    maxWidth: '1000px',
  },
  h2_reset_margin_top: {
    marginTop: '0px',
    fontSize: '2.2rem',
  },
  container_key_words: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  main: {
    paddingLeft: '85px',
  },
}

const Details: FC<MovieDetailsToStore> = ({
  backdropPath,
  budget,
  genres,
  homepage,
  originalLanguage,
  overview,
  popularity,
  revenue,
  runtime,
  status,
  tagline,
  title,
  voteAverage,
  voteCount,
}) => {
  const { keyWords } = useSelector(selectorMovieDetailsStore)

  return (
    <div style={styles.container_movie_details}>
      <div>
        <img
          style={styles.image_movie_details}
          src={routes.imagesDetails + backdropPath}
          alt="Film"
        />
      </div>
      <div style={styles.movie_details}>
        <h2 style={styles.h2_reset_margin_top}>{title}</h2>
        {genres?.map(({ name, id }) => (
          <span key={`Genre-id${id}`}>{name} </span>
        ))}
        * {runtime} m
        <br />
        <br />
        <a href={homepage} target={'_blank'} rel="noreferrer">
          Homepage
        </a>
        <br />
        <br />
        <p>{tagline}</p>
        <h3>Обзор</h3>
        <p>{overview}</p>
        <br />
        <b>Статус: </b>
        {status} | <b>Исходный язык: </b> {originalLanguage}
        <br /> <br />
        <b>Бюджет: </b> {budget}$ | <b>Популярность: </b> {popularity}
        <br /> <br />
        <b>Сборы: </b> {revenue}$ | <b>Количство голосов: </b> {voteCount} | <b>Средний голос: </b>
        {voteAverage} <br /> <br />
        <b>Ключевые слова: </b>
        <div style={styles.container_key_words}>
          <ul className="hr">
            {keyWords.map((word, index) => (
              <li key={index}> {word.name + ' '}</li>
            ))}
          </ul>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Details
