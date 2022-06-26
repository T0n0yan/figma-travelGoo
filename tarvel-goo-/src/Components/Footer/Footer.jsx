import React from 'react'
import images from '../../assets/Images'
import s from './Footer.module.scss'
import FooterList from './FooterLists/FooterList'


const Footer = () => {
  return (
    <div className={s.Container}>
      <div className={s.subscribeForm}>
        <img src={images.subLog} alt='asd' className={s.logo} / >
        <div className={s.title}>Subscribe to get information, latest news and other interesting offers about Cobham</div>
         <div>
         <input placeholder='Your Email'/>
         <button className={s.btn}>Subscribe</button>
         </div>
      </div>
      <FooterList />
    </div>
  )
}

export default Footer