import React from "react";
import images from "../../../assets/Images";
import s from './Header.module.scss'



const Header = () => {
  return (
    <div className={s.header}>
        <div className={s.headerLeft}>
            <div>Travel</div>
            <div>Goo</div>
        </div>
        <div className={s.headerTabs}>
            <div>Home</div>
            <div>Packages</div>
            <div>About Us </div>
        </div>
        <div className={s.headerRight}>
            <img src={images.star} alt='starIcon' className={s.starIcon}/>
            <img  src={images.PPicon} alt='ProfileIcon' className={s.PPicon}/>
        </div>   
    </div>
  )
}

export default Header