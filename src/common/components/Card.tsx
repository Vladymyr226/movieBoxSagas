import React, { CSSProperties, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { markAsFavoriteRequest } from "../../modules/favorite/store/actions"

const styles: Record<string, CSSProperties> = {
  container_card: {
    display: "grid",
    marginTop: "20px",
    cursor: "pointer",
    justifyItems: "center",
  },
  image_card_wrapper: {
    width: "150px",
    height: "225px",
  },
  image_card: {
    borderRadius: "10px",
    width: "100%",
  },

  flex_item_card: {
    marginTop: "20px",
    fontSize: "1em",
    padding: "0.7em",
    width: "150px",
  },
  title_card: {
    marginTop: "0px",
    marginBottom: "0px",
  },
  btn_favorite: {
    background: "transparent",
    border: "0",
    outline: "none",
    fontSize: "20px",
  },
  btn_buy_movie: {
    background: "transparent",
    fontSize: "20px",
    borderRadius: "30px",
  },
}

type CardProps = {
  id: number
  backdropPath: string
  title: string
  releaseDate: string
  favoriteMoviesIds: number[] | []
}

const Card = ({
  id,
  backdropPath,
  title,
  releaseDate,
  favoriteMoviesIds,
}: CardProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function getFilmId(id: number): void {
    navigate(`/movie/id=${id}`)
  }

  const [btnValueFavorite, setBtnValueFavorite] = useState(`♡`)

  const isFavorite: boolean = favoriteMoviesIds.some((item) => item === id)

  useEffect(() => {
    isFavorite ? setBtnValueFavorite(`⭐️`) : setBtnValueFavorite(`☆`)
  }, [favoriteMoviesIds])

  const handlerFavorite = () => {
    dispatch(
      markAsFavoriteRequest({
        mediaType: "movie",
        mediaId: id,
        favorite: !isFavorite,
      })
    )
  }

  return (
    <div style={styles.container_card}>
      <div style={styles.image_card_wrapper} onClick={() => getFilmId(id)}>
        <img style={styles.image_card} src={backdropPath} alt="Film" />
      </div>

      <div style={styles.flex_item_card}>
        <h3 style={styles.title_card}>{title}</h3>
        <p>
          {releaseDate}
          <button style={styles.btn_favorite} onClick={handlerFavorite}>
            {btnValueFavorite}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Card
