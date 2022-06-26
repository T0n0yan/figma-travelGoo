import React from 'react'
import CoverWelcome from './CoverWelcome/CoverWelcome'
import Header from './Header/Header'
import s from './Cover.module.scss'     

const Cover = () => {
  return (
    <div className={s.coverWrapper}>
        <Header />
        <CoverWelcome />
    </div>
  )
}

export default Cover