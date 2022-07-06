import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CheckMarkSVG from '../../../assets/svg/modalCheckMark.svg'

const Troubleshooting = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [connectType, setConnectType] = useState<string>('tel')
  const numberRegEpx = /^\+380\(\d{2}\) \d{3}-\d{2}-\d{2}$/

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prevState => !prevState);
  };
  const closeModal = () => {
    setShowModal(prevState => !prevState);
  };


  const validate = (): string[] => {
    const initErrors: string[] = []
    if (name.length < 2) initErrors.push('name')
    // if (!numberRegEpx.test(phone)) initErrors.push('phone')
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
        initialLink: localStorage
        ? localStorage.getItem('url')
        : false,
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
      openModal()

      if (result.status === 200) {
        setName('')
        setPhone('')
        openModal()
      }
    }
  }

  return (
    <section className='troubleshooting'>
      <div className="container troubleshooting__container">
        <div className="troubleshooting__container--bg"></div>
        <form className="troubleshooting__form">
        <div className="troubleshooting__form__input-wrapper">
        <span className="troubleshooting__form__thumb">
          <input 
          className={`troubleshooting__form-input ${
          errors.includes('name') ? 'troubleshooting__form-input--error' : ''
          }`}
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </span>
        <span className="troubleshooting__form__thumb">
          <input
          type="text"
          className={`troubleshooting__form-input ${
            errors.includes('phone') ? 'troubleshooting__form-input--error' : ''
          }`}
          placeholder="Ваш телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </span>
      </div>
      <div className="troubleshooting__form-checkbox-wrappers">
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            id="tel"
            name="tel"
            type="radio"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('tel')}
            checked={connectType === 'tel'}
          />
          <label className="troubleshooting__form-label" htmlFor="tel">
            Дзвінок
          </label>
        </div>
        
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            type="radio"
            id="telegram"
            name="telegram"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('telegram')}
            checked={connectType === 'telegram'}
          />
          <label className="troubleshooting__form-label" htmlFor="telegram">
            Telegram
          </label>
        </div>
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            type="radio"
            id="viber"
            name="viber"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('viber')}
            checked={connectType === 'viber'}
          />
          <label className="troubleshooting__form-label" htmlFor="viber">
            Viber
          </label>
        </div>
      </div>
      <button className="troubleshooting__form-btn" onClick={handleSend}>
        Відправити
      </button>
        </form>
        <div className="troubleshooting__text">
          <h2 className="pre-title troubleshooting__title">Дефектування авто по <span className='orange-text'>ФОТО</span></h2>
          <p className="troubleshooting__description section__text">
             Нам не обов'язково бачити автомобіль вживу, щоб зробити максимально детальний розрахунок запчастин. Потрібні лише <span className='orange-text'>фото та VIN номер</span> автомобіля
        </p>
        
        </div>
       
      </div>
      <div className="troubleshooting__image">
            <Image
              className=""
              src="/assets/images/troubleshooting-car.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
      {showModal && (
          <Modal onClose={closeModal}>
              <div className="consult__modal">
                  <div className="consult__modal__svg"><CheckMarkSVG/></div>
                  <h1 className="consult__modal__title">Дякуємо!</h1>
                  <h2 className='consult__modal__pre-title'>дані успішно відправлені</h2>
                  <p className='consult__modal__text'>Ми зв'яжемося з вами найближчим часом!</p>
              </div>
          </Modal>
        )}
    </section>
  )
}

export default Troubleshooting
