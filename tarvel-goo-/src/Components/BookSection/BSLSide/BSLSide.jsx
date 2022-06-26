import React from 'react'
import s from './BSLSide.module.scss';


const BSLSide = () => {
  return (
    <div>
      <div className={s.left}>
        <div className={s.leftItem}>
          <div>Choose Destination</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, optio voluptatibus?</div>
        </div>
        <div className={s.leftItem}>
          <div>Make Payment</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quaerat ut.</div>
        </div>
        <div className={s.leftItem}>
          <div>Reach Airport on Selected Date</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid.</div>
        </div>
      </div>
      <div className={s.right}></div>
    </div>
  )
}

export default BSLSide