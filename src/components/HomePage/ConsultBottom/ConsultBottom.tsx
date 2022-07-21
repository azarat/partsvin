import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CheckMarkSVG from '../../../assets/svg/modalCheckMark.svg'
import InputMask from 'react-input-mask'
import { useRouter } from 'next/router'

const ConsultBottom = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [connectType, setConnectType] = useState<string>('tel')
  const numberRegEpx = /^\+380\(\d{2}\) \d{3}-\d{2}-\d{2}$/

  const [showModal, setShowModal] = useState(false);

  const router = useRouter()

  const openModal = () => {
    router.push('/#thankyou')
    setShowModal(prevState => !prevState);
  };
  const closeModal = () => {
    setShowModal(prevState => !prevState);
    router.push('/')
  };

  const validate = (): string[] => {
    const initErrors: string[] = []
    if (name.length < 2) initErrors.push('name')
    if (!numberRegEpx.test(phone)) initErrors.push('phone')
    setErrors([...initErrors])
    return initErrors
  }

  const handleSend = async (e: any) => {
    e.preventDefault()
    if (validate().length == 0) {

      const data = {
        title: 'Форма: Консультація з експертом',
        name,
        phone,
        type: connectType,
      };

      const JSONdata = JSON.stringify(data)

      const endpoint = '/api/tg_bot'

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata
      }

      const response = await fetch(endpoint, options)

      const result = await response.json()
      
      if (result.ok) {
        setName('')
        setPhone('')
        openModal()        
      }
    }
  }

  return (
    <section className='consultBottom'>
      <div className="container consultBottom__container">
        <div className="consultBottom__container--bg"></div>
        <div className="consultBottom__text">
          <h2 className="pre-title consultBottom__title">у вас залишилися питання?</h2>
          <p className="consultBottom__description section__text">
            Залиште контакт, наш експерт точно відповість на них!
          </p>
        </div>
        <form className="consultBottom__form">
        <div className="consultBottom__form__input-wrapper">
        <span className="consultBottom__form__thumb">
          <input 
          className={`consultBottom__form-input ${
          errors.includes('name') ? 'consultBottom__form-input--error' : ''
          }`}
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </span>
        <span className="consultBottom__form__thumb">
          <InputMask className={`consult__form-input ${
            errors.includes('phone') ? 'consult__form-input--error' : ''
          }`} mask="+380\(99) 999-99-99"  placeholder="Ваш телефон"
          value={phone}
          onChange={(e:any) => setPhone(e.target.value)}/>
        </span>
      </div>
      <div className="consultBottom__form-checkbox-wrappers">
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            id="telBt"
            name="telBt"
            type="radio"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('tel')}
            checked={connectType === 'tel'}
          />
          <label className="consultBottom__form-label" htmlFor="telBt">
            Дзвінок
          </label>
        </div>
        
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            type="radio"
            id="telegramBt"
            name="telegramBt"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('telegram')}
            checked={connectType === 'telegram'}
          />
          <label className="consultBottom__form-label" htmlFor="telegramBt">
            Telegram
          </label>
        </div>
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            type="radio"
            id="viberBt"
            name="viberBt"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('viber')}
            checked={connectType === 'viber'}
          />
          <label className="consultBottom__form-label" htmlFor="viberBt">
            Viber
          </label>
        </div>
      </div>
      <button className="consultBottom__form-btn" onClick={handleSend}>
        Надіслати
      </button>
        </form>
        <div className="consultBottom__image--desc">
            <Image
              className=""
              src="/assets/images/details-consult.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
          <div className="consultBottom__image--tab">
            <Image
              className=""
              src="/assets/images/details-tab.png"
              layout="fill"
              objectFit="contain"
              alt='car'
              />
          </div>
          <div className="consultBottom__image--mob">
            <Image
              className=""
              src="/assets/images/details-mob.png"
              layout="fill"
              objectFit="contain"
              alt='car'
              />
          </div>
      </div>
      {showModal && (
          <Modal onClose={closeModal}>
              <div className="consultBottom__modal">
                  <div className="consultBottom__modal__svg"><CheckMarkSVG/></div>
                  <h1 className="consultBottom__modal__title">Дякуємо!</h1>
                  <h2 className='consultBottom__modal__pre-title'>дані успішно відправлені</h2>
                  <p className='consultBottom__modal__text'>Ми зв`яжемося з вами найближчим часом!</p>
              </div>
          </Modal>
        )}
    </section>
  )
}

export default ConsultBottom
