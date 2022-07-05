import Image from 'next/image'
import  ClientsCars  from '../../../constants/clients'
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Clients = () => {
 

  return (
    <section className='clients'>
      <div className="container clients__container">
        <h2 className='title clients__title'>наші клієнти</h2>
        
        


        <ul className="clients__cards">
          {ClientsCars.map(({ id, model, image_1, image_2 }) => (
            <li key={id} className="clients__cards__item">
              <div className="clients__cards__item--image">
              <ImgComparisonSlider>
                <img slot="first" src={image_1}  />
                <img slot="second" src={image_2} />
                <div slot="handle" className='handler'></div>
              </ImgComparisonSlider>
                {/* <Image
                  className=""
                  src="/assets/images/details-consult.png"
                  layout="fill"
                  objectFit="cover"
                  alt='car'
                  /> */}
              </div>
              <p className='clients__cards__item--text'>{model}</p>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Clients
