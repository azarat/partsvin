import Image from 'next/image'
import  WorkProccesCards  from '../../../constants/workProcess'
 

const WorkProcess = () => {

  return (
    <section className='workProcess' id='workProcess'>
      <div className="container workProcess__container">
        <h2 className='title workProcess__title'>Процес роботи</h2>
        <ul className="workProcess__cards">
          {WorkProccesCards.map(({ id, num, title, text}) => (
            <li key={id} className="workProcess__cards__item">
              <p className='workProcess__cards__item--num'>{num}</p>
              <h3 className='workProcess__cards__item--title'>{title}</h3>
              <p className='section__text workProcess__cards__item--text'>{text}</p>
            </li>
          ))
          }
        </ul>
        {/* <div className="workProcess__image">
          <Image
           src="/assets/images/work-process-carq.png"
           layout="fill"
           objectFit="cover"
           alt='car'
          />
        </div> */}
      </div>
      
    </section>
  )
}

export default WorkProcess
