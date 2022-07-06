import Image from 'next/image'
import  ClientsReviews  from '../../../constants/reviews'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSVG from '../../../assets/svg/review.svg'


const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    nextArrow: <SampleArrowNext />, 
    prevArrow: <SampleArrowPrev />, 
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>)
  };
  function SampleArrowNext(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{position: "absolute", top: "110%", display: "flex", alignItems: "center", justifyContent: 'center', width: "75px", height: "75px", background: "linear-gradient(94.92deg, #EC9236 -7.37%, #FFA447 108.18%)", boxShadow: "0px 0px 30px rgba(239, 151, 60, 0.5), inset 0px 0px 15px rgba(255, 255, 255, 0.2)", transform: "rotate(45deg)", right: "25%" }}
        onClick={onClick}
      />
    );
  }
  function SampleArrowPrev(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, position: "absolute", top: "110%", display: "flex", alignItems: "center", justifyContent: 'center', width: "75px", height: "75px", background: "linear-gradient(94.92deg, #EC9236 -7.37%, #FFA447 108.18%)", boxShadow: "0px 0px 30px rgba(239, 151, 60, 0.5), inset 0px 0px 15px rgba(255, 255, 255, 0.2)", transform: "rotate(45deg)", left: '21%' }}
        onClick={onClick}
      />
    );
  }


  return (
    <section className='reviews' id='reviews'>
      <div className="container reviews__container">
        <h2 className='title reviews__title'>Відгуки</h2>
        <Slider {...settings}>
        {ClientsReviews.map(({ id, name, text, image }) => (
            <div key={id} className="reviews__card">
              <div className="reviews__card-image">
                <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt='car'
                />
              </div>
              <div className="reviews__card-wrapper">
                <p className='reviews__card-name'><ReviewSVG/> {name}</p>
                <p className='reviews__card-text'>{text}</p>
              </div>
            </div>))}
        </Slider>

      </div>
    </section>
  )
}

export default Reviews
