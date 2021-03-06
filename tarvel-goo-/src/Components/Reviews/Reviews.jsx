import React from 'react'
import s from './Reviews.module.scss'
import images from '../../assets/Images'

const Reviews = () => {
  return (
  <div className={s.reviewBody}>
    <div className={s.reviewHeader}>What People Say About Us</div>
      <div className={s.reviews}>
        <img src={images.review1} className={s.leftImg} alt='review' />
        <div className={s.review}>
          <div className={s.reviewCard}>
            <div className={s.reviewAvatar} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            <div className={s.autor}>-Jeo Stanlee</div>
          </div>
        </div>
        <img src={images.review3} className={s.rightImg} alt='review' />
      </div>
  </div>
  )
}

export default Reviews