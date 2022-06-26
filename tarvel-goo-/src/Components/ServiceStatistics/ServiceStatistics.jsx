import React from 'react'
import Subscribe from '../Subscribe/Subscribe.jsx'
import s from './ServiceStatistics.module.scss'

const ServiceStatistics = () => {
  return (
    <div className={s.SSContainer}>
      <div className={s.title}>We always try to give you the best service</div>
      <div className={s.description}>We always try to make our customer Happy. We provide all kind of facilities. Your Satisfaction is our main priority.</div>
      <Subscribe />
    </div>
  )
}

export default ServiceStatistics