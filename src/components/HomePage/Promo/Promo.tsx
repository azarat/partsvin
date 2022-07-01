import LeftLine from '../../../assets/svg/promo-left-line.svg'
import RightLine from '../../../assets/svg/promo-right-line.svg'

const Promo = () => {

  return (
    <section className='promo'>
      <div className="container promo__container">
        <h1 className="promo__title">Все что нужно для вашего автомобиля</h1>
        <div className="promo__description">
          <p className="promo__description__item  section__text">Расходники обслуживания авто.<br/> От винтика до масла <LeftLine className="promo__description__item--left"/></p>
          <p className="promo__description__item section__text"> 
          <RightLine className="promo__description__item--right"/>
          Кузовные запчасти для авто из США, Европы, Кореи и других стран</p>
        </div>
        <div className="promo__buttons">
          <button className="promo__buttons__item--left section__text">Узнать цены</button>
          <button className="promo__buttons__item--right section__text">Получить дефектовку Бесплатно</button>
        </div>
      </div>
    </section>
  )
}

export default Promo
