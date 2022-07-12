import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'


const Networks = () => {
  return (
      <ul className="header__networks">
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='https://m.facebook.com/partsvin#_=_' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='https://instagram.com/partsvin?igshid=YmMyMTA2M2Y=' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
      </ul>
  )
}

export default Networks
