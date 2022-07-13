import { useState } from 'react'
import  FaqItems  from '../../../constants/faq'
 
const Faq = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  return (
    <section className='faq'>
      <div className="container faq__container">
        <h2 className='title faq__title'>відповіді на часті запитання</h2>
        <ul className="faq__accordion">
          {FaqItems.map(({ id, question, answer }, i) => (
            <li key={id} className={`faq__accordion-item ${
              activeFaq === i ? 'faq__accordion-item--open' : ''
            }`}
            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            role="presentation">
              <p  className='faq__accordion-item-title'>{question}</p>
              <p  className='section__text faq__accordion-item-text'>{answer}</p>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Faq
