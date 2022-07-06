import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'
import PhoneSVG from '../../assets/svg/phone.svg'
import ViberSVG from '../../assets/svg/viber.svg'


const Networks = () => {
  return (
      <ul className="footer__networks">
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href='/' rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href='/' rel="noreferrer">
              <ViberSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href='/' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href='/' rel="noreferrer">
              <PhoneSVG />
            </a>
          </li>
      </ul>
  )
}

export default Networks
