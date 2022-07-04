import Image from 'next/image'
import LeftLine from '../../../assets/svg/promo-left-line.svg'
import RightLine from '../../../assets/svg/promo-right-line.svg'

const Promo = () => {

  return (
    <section className='promo'>
      <div className="container promo__container">
        <div className="promo__bg"></div>
        <h1 className="promo__title">Все, що потрібно для вашого автомобіля</h1>
        <div className="promo__description">
          <p className="promo__description__item  section__text"> <span className='orange-text'>Витратні матеріали</span> обслуговування авто. Від гвинтика до олії <LeftLine className="promo__description__item--left"/></p>
          <p className="promo__description__item section__text"> 
          <RightLine className="promo__description__item--right"/>
          <span className='orange-text'>Кузовні запчастини</span> для авто з США, Європи, КореЇ та інших країн</p>
        </div>
        <div className="promo__buttons">
          <button className="promo__buttons__item--left section__text">Дізнатися ціни</button>
          <button className="promo__buttons__item--right section__text">Отримати дефектування безкоштовно</button>
        </div>
        
          <div className="promo__bg--image">
            <Image
              className=""
              src="/assets/images/auto-promo.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
      </div>
    </section>
  )
}

export default Promo
