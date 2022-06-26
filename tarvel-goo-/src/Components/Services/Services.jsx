import React from 'react'
import Categories from './Categories/Categories'
import s from './Services.module.scss'


const Services = () => {
  return (
    <div className={s.servicesContainer} >
      <div className={s.servicesTitle}>Our Services</div>
      <Categories />
    </div>
  )
}

export default Services