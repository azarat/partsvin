import Image from 'next/image'
import LeftLine from '../../../assets/svg/promo-left-line.svg'
import RightLine from '../../../assets/svg/promo-right-line.svg'
import TopLine from '../../../assets/svg/promo-top-mob.svg'
import BotLine from '../../../assets/svg/promo-bot-mob.svg'
import Link from 'next/link'

const Promo = () => {

  return (
    <section className='promo' id='promo'>
      <div className="container promo__container--desc">
        <div className="promo__bg"></div>
        <h1 className="promo__title">Все, що потрібно для вашого автомобіля</h1>
        <div className="promo__description">
          <p className="promo__description__item  section__text"> <span className='orange-text'>Витратники</span> обслуговування авто. Від гвинтика до олії <LeftLine className="promo__description__item--left"/></p>
          <p className="promo__description__item section__text"> 
          <RightLine className="promo__description__item--right"/>
          <span className='orange-text'>Кузовні запчастини</span> для ремонту авто з будь-якими пошкодженнями</p>
        </div>
        <div className="promo__buttons">
          <Link href="/#consult"><button className="promo__buttons__item--left section__text">Дізнатись ціни</button></Link>
          <Link href="/#troubleshooting"><button className="promo__buttons__item--right section__text">Отримати дефектування безкоштовно</button></Link>
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
      <div className="container promo__container--mob">
        <div className="promo__bg"></div>
        <h1 className="promo__title">Все, що потрібно для вашого автомобіля</h1>
          <p className="promo__top-text  section__text"> <span className='orange-text'>Витратники</span> обслуговування авто. Від гвинтика до олії <TopLine className="promo__top-line"/></p>
          
          <Link href="/#consult"><button className="promo__buttons__item--left section__text">Дізнатись ціни</button></Link>
          
          
          
          <div className="promo__image">
            <Image
              className=""
              src="/assets/images/auto-promo.png"
              layout="fill"
              objectFit="contain"
              alt='car'
              />
          </div>
          
          <Link href="/#troubleshooting"><button className="promo__buttons__item--right section__text">Отримати дефектування безкоштовно</button></Link>
          <p className="promo__bottom-text section__text"> 
            <BotLine className="promo__bot-line"/>
            <span className='orange-text'>Кузовні запчастини</span> для ремонту авто з будь-якими пошкодженнями</p>
      </div>
    </section>
  )
}

export default Promo
