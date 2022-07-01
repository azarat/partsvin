import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'


const Logo = () => {
  return (
      <ul className="header__networks">
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
      </ul>
  )
}

export default Logo
