import React, { useState } from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSVG from '../../../assets/svg/review.svg'

const Review = ({id, name, image, text}: {id: any, name: string, image: any, text: string}) => {
  const [isActive, setIsActive] = useState(false)

  return (
            <div key={id} className="reviews__card">
              <div className={"reviews__card-image" + (isActive == true ? " active" : "")}>
                <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt='car'
                />
              </div>
              <div className={"reviews__card-wrapper" + (isActive == true ? " active" : "")}>
                <p className='reviews__card-name'><ReviewSVG/> {name}</p>
                <p className={"reviews__card-text" + (isActive == true ? " active" : "")}>{text}
                </p>
              </div>
              <button onClick={() =>{                  
                  setIsActive(!isActive)} }  className={"reviews__card-text-btn" + (isActive == true ? " active" : "")} >{isActive ? 'Приховати відгук' : 'Розгорнути відгук'}</button>
            </div>
  )
}

export default Review
