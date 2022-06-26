import React from 'react'
import DestPosition from './DestPostition/DestPosition'
import s from './Destination.module.scss'

const Destination = () => {
  return (
    <div className={s.Container}>
      <div className={s.title}>Out Popular Distinations</div>
      <DestPosition />
    </div>
  )
}

export default Destination