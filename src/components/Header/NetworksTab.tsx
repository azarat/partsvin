import PhoneSVG from '../../assets/svg/phone.svg'
import TelegramSvg from '../../assets/svg/telegram.svg'


const NetworksTab = () => {
  return (
      <ul className="header__networksTab">
          <li className="header__networksTab__item">
            <a className='header__networks__link' href='tel:+380681748181'  rel="noreferrer">
            <PhoneSVG />
          </a>
          </li>
          <li className="header__networksTab__item">
            <a className='header__networks__link' target="_blank" href="https://t.me/Denis_CFW" rel="noreferrer">
            <TelegramSvg />
            </a>
          </li>
      </ul>
  )
}

export default NetworksTab
