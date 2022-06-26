import React from 'react'
import s from './FooterList.module.scss'
import images from '../../../assets/Images'

const FooterList = () => {
  return (
    <div className={s.Container}>
        <div className={s.leftList}>
            <div>Travel</div>
            <div>Goo</div>
            <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
       <ul>
       <strong>Company</strong>
        <li>item</li>
        <li>item</li>
        <li>item</li>
       </ul>
       <ul>
       <strong>Contacts</strong>
        <li>item</li>
        <li>item</li>
        <li>item</li>
       </ul>
       <ul>
       <strong>More</strong>
        <li>item</li>
        <li>item</li>
        <li>item</li>
       </ul>
       <div className={s.rightSide}>
        <img src={images.FaceBook} alt='Facebook' />
        <img src={images.Instagram} alt='Instagram'/>
        <img src={images.EmptyHole} alt='circle' />
        <div>Dicover our App</div>
        <img src={images.GooglePlay} alt='GooglePLay' />
        <img src={images.AppleStore} alt='App store' />
       </div>
    </div>
  )
}

export default FooterList