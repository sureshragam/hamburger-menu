// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav>
    <Link to="/">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="icon" />
        </button>
      }
      modal
    >
      {close => (
        <ul className="popup">
          <li>
            <button
              type="button"
              onClick={() => close()}
              className="link-icon"
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
          </li>

          <Link to="/" className="link" onClick={() => close()}>
            <li>
              <AiFillHome className="link-icon" />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/about" className="link" onClick={() => close()}>
            <li>
              <BsInfoCircleFill className="link-icon" />
              <p>About</p>
            </li>
          </Link>
        </ul>
      )}
    </Popup>
  </nav>
)

export default Header
