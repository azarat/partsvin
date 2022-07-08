import Image from 'next/image'

const Storage = () => {

  return (
    <section className='storage' id='storage'>
      <div className="container storage__container">
        <h2 className='title storage__title'>БЕЗКОШТОВНЕ ЗБЕРІГАННЯ ВАШИХ ЗАПЧАСТин</h2>
      </div>
      <div className="storage__wrapper">
        <div className="storage__image--desc">
          <Image
              className=""
              src="/assets/images/storage.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
        </div>
        <div className="storage__image--mob">
          <Image
              className=""
              src="/assets/images/storage-mob.png"
              layout="fill"
              objectFit="contain"
              alt='car'
              />
        </div>
        <div className="storage__description">
          <h3 className='storage__description__title'>Центральний склад у Києві</h3>
          <p className='section__text storage__description__text'>створено ідеальні умови для зберігання запчастин (температура, вологість).</p>
          <h3 className='storage__description__title'>Безкоштовне зберігання</h3>
          <p className='section__text storage__description__text'>запчастини наших клієнтів зберігаються до їх приїзду на СТО.</p>
        </div>
      </div>
    </section>
  )
}

export default Storage
