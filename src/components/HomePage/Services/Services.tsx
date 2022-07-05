import Image from 'next/image'

const Services = () => {

  return (
    <section className='services'>
      <div className="container services__container">
        <div className="services__grid">
          <div className="services__grid__item">
            <p className='services__grid__item--num'>01</p>
            <p className='services__grid__item--text'>Підбираємо</p>
          </div>
          <div className="services__grid__item">
            <p className='services__grid__item--num'>02</p>
            <p className='services__grid__item--text'>Веземо</p>
          </div>
          <div className="services__grid__item">
            <p className='services__grid__item--num'>03</p>
            <p className='services__grid__item--text'>Перевіряємо</p>
          </div>
          <div className="services__grid__item">
            <p className='services__grid__item--num'>04</p>
            <p className='services__grid__item--text'>Зберігаємо</p></div>
          <div className="services__grid__item">
            <p className='services__grid__item--num'>05</p>
            <p className='services__grid__item--text'>Доставляємо</p>
          </div>
          <div className="services__grid__item">
            <p className='services__grid__item--num'>06</p>
            <p className='services__grid__item--text'>Гарантуємо</p>
          </div>
        </div>
        <div className="services__image">
          <Image
            className=""
            src="/assets/images/flag.png"
            layout="fill"
            objectFit="cover"
            alt='flag'
          />
        </div>
      </div>
    </section>
  )
}

export default Services
