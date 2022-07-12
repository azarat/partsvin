import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'


const NetworksTab = () => {
  return (
      <ul className="header__networksTab">
          <li className="header__networksTab__item">
            <a className='header__networksTab__link' target="_blank" href='https://m.facebook.com/partsvin#_=_' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="header__networksTab__item">
            <a className='header__networksTab__link' target="_blank" href='https://instagram.com/partsvin?igshid=YmMyMTA2M2Y=' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
      </ul>
  )
}

export default NetworksTab
