import React from 'react'
import ServiceStatistics from '../ServiceStatistics/ServiceStatistics'
import s from './Subscribe.module.scss'
import images from './../../assets/Images'
const Subscribe = () => {
  return (
    <div className={s.StatisticContainer}>
      <div className={s.serviceItem}>
        <img src={images.ServiceEx1} alt='calendar' className={s.serviceImg}/>
        <div className={s.raiting}>15+</div>
        <div className={s.description}>Years of Experience</div>
      </div>
      <div className={s.serviceItem}>
        <img src={images.ServiceEx2} alt='statistic' className={s.serviceImg}/>
        <div className={s.raiting}>15K+</div>
        <div className={s.description}>Happy Travellers</div>
      </div>
      <div className={s.serviceItem}>
        <img src={images.ServiceEx3} alt='location' className={s.serviceImg}/>
        <div className={s.raiting}>650+</div>
        <div className={s.description}>Places Visited</div>
      </div>
      <div className={s.serviceItem}>
        <img src={images.ServiceEx4} alt='history' className={s.serviceImg}/>
        <div className={s.raiting}>2K+</div>
        <div className={s.description}>Travel History</div>
      </div>
    </div>
  )
}

export default Subscribe