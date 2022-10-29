import { CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'
import iconBasket from '../icons/cart.svg'
import favourite from '../icons/favourites.svg'
import home from '../icons/home.svg'
import code from '../icons/code.svg'
import Modal from '../../common/components/modal/Modal'

const styles: Record<string, CSSProperties> = {
  navigationGridContainer: {
    position: 'fixed',
    height: '100vh',
    width: '65px',
    backgroundColor: '#9c27b0',
    display: 'inline-grid',
    justifyContent: 'center',
    padding: '10px',
  },
  navigationGridItems: {
    height: '100px',
  },
  btn: {
    backgroundColor: '#9c27b0',
    border: 'none',
    padding: '0px',
    height: '100px',
  },
  a: {
    color: 'black',
    textDecoration: 'none',
  },
}

const Header = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <header>
        <nav style={styles.navigationGridContainer}>
          <div style={styles.navigationGridItems}>
            <Link style={styles.a} to={'/movies/popular'}>
              <img src={home} alt="home" />
            </Link>
          </div>
          <div style={styles.navigationGridItems}>
            <Link style={styles.a} to={'/movies/favourites'}>
              <img src={favourite} alt="star" />
            </Link>
          </div>
          <button
            type="button"
            style={styles.btn}
            className="open-btn"
            onClick={() => setModalActive(true)}
          >
            <img src={iconBasket} alt="cart" />
          </button>
          <div style={styles.navigationGridItems}>
            <a style={styles.a} href="https://github.com/Vladymyr226/">
              <img src={code} alt="code" />
            </a>
          </div>
        </nav>
      </header>
      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <p></p>
      </Modal>
    </>
  )
}

export default Header
