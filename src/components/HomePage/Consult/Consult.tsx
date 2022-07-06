import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CheckMarkSVG from '../../../assets/svg/modalCheckMark.svg'


const Consult = () => {
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
    <section className='consult'>
      <div className="container consult__container">
        <div className="consult__container--bg"></div>
        <div className="consult__text">
          <h2 className="pre-title consult__title"><span className='orange-text'>БЕЗКОШТОВНА</span> консультація з експертом</h2>
          <p className="consult__description section__text">
            Отримайте відповіді на всі ваші запитання! 
        </p>
       
        </div>
        <form className="consult__form">
        <div className="consult__form__input-wrapper">
        <span className="consult__form__thumb">
          <input 
          className={`consult__form-input ${
          errors.includes('name') ? 'consult__form-input--error' : ''
          }`}
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </span>
        <span className="consult__form__thumb">
          <input
          type="text"
          className={`consult__form-input ${
            errors.includes('phone') ? 'consult__form-input--error' : ''
          }`}
          placeholder="Ваш телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </span>
      </div>
      <div className="consult__form-checkbox-wrappers">
        <div className="consult__form-checkbox-wrapper">
          <input
            id="tel"
            name="tel"
            type="radio"
            className="consult__form-checkbox"
            onChange={() => setConnectType('tel')}
            checked={connectType === 'tel'}
          />
          <label className="consult__form-label" htmlFor="tel">
            Дзвінок
          </label>
        </div>
        
        <div className="consult__form-checkbox-wrapper">
          <input
            type="radio"
            id="telegram"
            name="telegram"
            className="consult__form-checkbox"
            onChange={() => setConnectType('telegram')}
            checked={connectType === 'telegram'}
          />
          <label className="consult__form-label" htmlFor="telegram">
            Telegram
          </label>
        </div>
        <div className="consult__form-checkbox-wrapper">
          <input
            type="radio"
            id="viber"
            name="viber"
            className="consult__form-checkbox"
            onChange={() => setConnectType('viber')}
            checked={connectType === 'viber'}
          />
          <label className="consult__form-label" htmlFor="viber">
            Viber
          </label>
        </div>
      </div>
      <button className="consult__form-btn" onClick={handleSend}>
        Надіслати
      </button>
        </form>
        <div className="consult__image--desc">
            <Image
              className=""
              src="/assets/images/details-consult.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
          <div className="consult__image--mob">
            <Image
              className=""
              src="/assets/images/details-mob.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
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

export default Consult
