import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'
import PhoneSVG from '../../assets/svg/phone.svg'
import ViberSVG from '../../assets/svg/viber.svg'


const NetworksMob = () => {
  return (
      <ul className="header__networks">
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <ViberSVG />
            </a>
          </li>
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="header__networks__item">
            <a className='header__networks__link' target="_blank" href='/' rel="noreferrer">
              <PhoneSVG />
            </a>
          </li>
      </ul>
  )
}

export default NetworksMob
