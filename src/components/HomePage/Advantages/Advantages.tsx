import  OurAdvantages  from '../../../constants/advantages'
 

const Advantages = () => {

  return (
    <section className='advantages'>
      <div className="container advantages__container">
        <h2 className='title advantages__title'>Чому ми?</h2>
        <ul className="advantages__cards">
          {OurAdvantages.map(({ id, content }) => (
            <li key={id} className="advantages__cards__item">
              <p  className='section__text advantages__cards__item--text'>{content}</p>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Advantages
