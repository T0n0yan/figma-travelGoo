import React from 'react'
import images from '../../../assets/Images'
import s from './Categories.module.scss'

const Categories = () => {
  return (
    <div className={s.categoriesContainer}>
        <div className={s.categoriesItem}>
            <img src={images.Ticket} alt='' className={s.categoriesIcons} />
            <div className={s.categoriesFirstText}>Ticket Booking</div>
            <div className={s.categoriesSecondText}>We book all kind of national or international ticket for your destinaion.</div>
        </div>
        <div className={s.categoriesItem}>
            <img src={images.Hotel} alt='' className={s.categoriesIcons} />
            <div className={s.categoriesFirstText}>Hotel Booking</div>
            <div className={s.categoriesSecondText}>You can easily book your according to your budget hotel by our website.</div>
        </div>
        <div className={s.categoriesItem}>
            <img src={images.Tour} alt='' className={s.categoriesIcons} />
            <div className={s.categoriesFirstText}>Tour Plan</div>
            <div className={s.categoriesSecondText}>We provide you the best plan within a short time explore more.</div>
        </div>
    </div>
  )
}

export default Categories