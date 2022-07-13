import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CheckMarkSVG from '../../../assets/svg/modalCheckMark.svg'
import InputMask from 'react-input-mask'

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
    if (!numberRegEpx.test(phone)) initErrors.push('phone')
    setErrors([...initErrors])
    return initErrors
  }

  const handleSend = async (e: any) => {
    e.preventDefault()
    if (validate().length == 0) {
    

      const data = {
        title: 'Форма: Дефектування авто',
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
    <section className='troubleshooting' id='troubleshooting'>
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
          <InputMask className={`consult__form-input ${
            errors.includes('phone') ? 'consult__form-input--error' : ''
          }`} mask="+380\(99) 999-99-99"  placeholder="Ваш телефон"
          value={phone}
          onChange={(e:any) => setPhone(e.target.value)}/>
        </span>
      </div>
      <div className="troubleshooting__form-checkbox-wrappers">
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            id="telTr"
            name="telTr"
            type="radio"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('tel')}
            checked={connectType === 'tel'}
          />
          <label className="troubleshooting__form-label" htmlFor="telTr">
            Дзвінок
          </label>
        </div>
        
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            type="radio"
            id="telegramTr"
            name="telegramTr"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('telegram')}
            checked={connectType === 'telegram'}
          />
          <label className="troubleshooting__form-label" htmlFor="telegramTr">
            Telegram
          </label>
        </div>
        <div className="troubleshooting__form-checkbox-wrapper">
          <input
            type="radio"
            id="viberTr"
            name="viberTr"
            className="troubleshooting__form-checkbox"
            onChange={() => setConnectType('viber')}
            checked={connectType === 'viber'}
          />
          <label className="troubleshooting__form-label" htmlFor="viberTr">
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
             Нам не обов`язково бачити автомобіль вживу, щоб зробити максимально детальний розрахунок запчастин. Потрібні лише <span className='orange-text'>фото та VIN номер</span> автомобіля
        </p>
        </div>
        <div className="troubleshooting__image--mob">
            <Image
              className=""
              src="/assets/images/troubleshooting-car-mob.png"
              layout="fill"
              objectFit="contain"
              alt='car'
              />
          </div>
          <div className="troubleshooting__image--tab">
            <Image
              className=""
              src="/assets/images/troubleshooting-car-tab.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
          <div className="troubleshooting__image--desc">
            <Image
              className=""
              src="/assets/images/troubleshooting-car.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
      </div>
      
      {showModal && (
          <Modal onClose={closeModal}>
              <div className="troubleshooting__modal">
                  <div className="troubleshooting__modal__svg"><CheckMarkSVG/></div>
                  <h1 className="troubleshooting__modal__title">Дякуємо!</h1>
                  <h2 className='troubleshooting__modal__pre-title'>дані успішно відправлені</h2>
                  <p className='troubleshooting__modal__text'>Ми зв`яжемося з вами найближчим часом!</p>
              </div>
          </Modal>
        )}
    </section>
  )
}

export default Troubleshooting
