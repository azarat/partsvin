import Image from "next/image"

const Logistic = () => {

  return (
    <section className='logistic' id="logistic">
      <div className="container logistic__container">
        <h2 className='title logistic__title'>Надійна логістика</h2>
        <p className='section__text logistic__text'>Запчастини приходять саме ті, що треба, не губляться і не б'ються</p>
        <div className="logistic__cards">
          <div className="logistic__cards--left">
            <h3 className='logistic__cards__title'>Міжнародна логістика</h3>
            <div className="logistic__cards--left-image">
              <Image
              src="/assets/images/logistic-tr-inter.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
            </div>
          </div>
          <div className="logistic__cards__image">
              <Image
              src="/assets/images/logistic-arrow.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
            </div>
          <div className="logistic__cards--right">
            <h3 className='logistic__cards__title'>Логістика по УКраїні</h3>
            <div className="logistic__cards--right-image">
              <Image
              src="/assets/images/logistic-tr-ua.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
            </div>
          </div>
        </div>
        <p className="section__text logistic__text--bottom">Ми доставляємо запчастини з усіх країн світу. Далі забезпечуємо логістику по Україні <span className="orange-text">у найкоротші терміни</span></p>
      </div>
    </section>
  )
}

export default Logistic
