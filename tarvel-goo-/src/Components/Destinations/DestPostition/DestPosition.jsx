import React from 'react'
import images from '../../../assets/Images'
import s from './DestPosition.module.scss'


const DestPosition = () => {
  return (
    <div className={s.DestContainer}>
            <img src={images.world_map} alt='' className={s.leftImg} />
            <div className={s.rightSide}>
                <div className={s.itemsContainer}>
                    <div className={s.item}>
                        <img src={images.Thailand} alt='' className={s.itemPics} />
                        <div className={s.placeName}>Thailand</div>
                        <div className={s.itemDescription}>
                            <div>20+ Spots</div>
                            <div>2D & 3N</div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={images.Indonesia} alt='' className={s.itemPics} />
                        <div className={s.placeName}>Indonesia</div>
                        <div className={s.itemDescription}>
                            <div>25+ Spots</div>
                            <div>3D & 3N</div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={images.Thailand} alt='' className={s.itemPics} />
                        <div className={s.placeName}>Thailand</div>
                        <div className={s.itemDescription}>
                            <div>20+ Spots</div>
                            <div>3D & 2N</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DestPosition