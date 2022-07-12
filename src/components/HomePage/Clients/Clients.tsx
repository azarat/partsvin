import  ClientsCars  from '../../../constants/clients'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useState } from 'react';
import ArrowSVG from '../../../assets/svg/arrow-review.svg'

const Clients = () => {
  const [active, setActive] = useState(false)

  return (
    <section className='clients'>
      <div className="container clients__container">
        <h2 className='title clients__title'>наші клієнти</h2>

        <ul className="clients__cards">
          {ClientsCars.map(({ id, model, image_1, image_2 }) => (
            <li key={id} className={"clients__cards__item" + (active == true ? " odd" : " even") }>
              <div className="clients__cards__item--image">
              <ImgComparisonSlider>
                <img slot="first" src={image_1} alt=''/>
                <img slot="second" src={image_2} alt=''/>
                <div slot="handle" className='handler'></div>
              </ImgComparisonSlider>
              </div>
              <p className='clients__cards__item--text'>{model}</p>
            </li>
          ))
          }
          <button className='clients__btn' onClick={() => {setActive(!active) 
            console.log('qwe')} }><ArrowSVG/></button>
        </ul>
      </div>
    </section>
  )
}

export default Clients
