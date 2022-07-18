import { useState } from 'react'
import  FaqItems  from '../../../constants/faq'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  return (
    <section className='faq'>
      <div className="container faq__container">
        <h2 className='title faq__title'>відповіді на часті запитання</h2>
        <Accordion defaultActiveKey="0" >
          {FaqItems.map(({ id, question, answer }) => (
              <Accordion.Item key={id} eventKey={id} >
              <Accordion.Header>{question}</Accordion.Header>
              <Accordion.Body>
                {answer}
              </Accordion.Body>
            </Accordion.Item>
            ))
          }
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
