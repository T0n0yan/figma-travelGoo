import React from 'react'
import s from './BookSection.module.scss'
import BSLSide from './BSLSide/BSLSide.jsx'
import BSRSide from './BSRSide/BSRSide.jsx'

const BookSection = () => {
  return (
  <div>
    <div className={s.bookSection}>
      <div className={s.header}>
        <div className={s.title}>Book Your Next Trip in 3 Easy Steps</div>
        <div className={s.headerDescription}>Easy and Fast</div>
      </div>
        <BSLSide />
        <BSRSide />
    </div>
  </div>
  )
}

export default BookSection