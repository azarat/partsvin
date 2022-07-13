import FacebookSVG from '../../assets/svg/facebook.svg'
import InstagramSVG from '../../assets/svg/instagram.svg'
import PhoneSVG from '../../assets/svg/phone.svg'
import ViberSVG from '../../assets/svg/viber.svg'


const Networks = () => {
  return (
      <ul className="footer__networks">
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href="https://instagram.com/partsvin?igshid=YmMyMTA2M2Y=" rel="noreferrer">
              <InstagramSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href="https://skobelkin.ru/viber/0687454269" rel="noreferrer">
              <ViberSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' target="_blank" href='https://m.facebook.com/partsvin#_=_' rel="noreferrer">
              <FacebookSVG />
            </a>
          </li>
          <li className="footer__networks__item">
            <a className='footer__networks__link' href='tel:+380687454269' rel="noreferrer">
              <PhoneSVG />
            </a>
          </li>
      </ul>
  )
}

export default Networks
