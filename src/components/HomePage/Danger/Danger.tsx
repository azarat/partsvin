import Piston from '../../../assets/svg/danger-piston.svg'
import Car from '../../../assets/svg/danger-car.svg'
import Shield from '../../../assets/svg/danger-shield.svg'

const Danger = () => {

  return (
    <section className='danger'>
      <div className="container danger__container">
        <h2 className='title danger__title'>Небезпеки, від яких ви будете вбережені, працюючи з нами</h2>
        <div className="danger__cards">
          <div className="danger__cards__item">
            <div className="danger__cards__item-svg">
              <Piston/>
            </div>
            <p className='section__text danger__cards__item-text'>
              Ми знаємо різницю в запчастинах американських авто та європейських аналогах, що <span className='orange-text'>виключить неприємні сюрпризи та додаткові витрати</span> 
            </p>
          </div>
          <div className="danger__cards__item">
            <div className="danger__cards__item-svg">
              <Car/>
            </div>
            <p className='section__text danger__cards__item-text'>
            <span className='orange-text'>Ми не припустимо</span>, щоб продавець підсунув неоригінал, який не підійде на Ваш автомобіль
            </p>
          </div>
          <div className="danger__cards__item">
            <div className="danger__cards__item-svg">
              <Shield/>
            </div>
            <p className='section__text danger__cards__item-text'>
            Ринок запчастин славиться великою кількістю шахраїв, працюючи з нами  <span className='orange-text'>ви будете захищені</span> від фінансових втрат
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Danger
