import React from 'react'
import s from './CoverWelcome.module.scss'
const CoverWelcome = () => {
  return (
    <div className={s.textContainer} >
        <div className={s.firstText}>Your Imagination Is Your Only Limit</div>
        <div className={s.secondText}>
            We always try to make our customer Happy. We provide all kind of facilities. Your
            Satisfaction is our main priority
        </div>
        <div className={s.coverButton}>Dicover More</div>
    </div>
  )
}

export default CoverWelcome