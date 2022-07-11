import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'


const NetworksTab = () => {
  return (
      <ul className="header__networksTab">
          <li className="header__networksTab__item">
            <a className='header__networksTab__link' target="_blank" href='/' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="header__networksTab__item">
            <a className='header__networksTab__link' target="_blank" href='/' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
      </ul>
  )
}

export default NetworksTab
