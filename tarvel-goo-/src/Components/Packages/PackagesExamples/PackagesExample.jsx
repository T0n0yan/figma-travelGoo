import React from 'react'
import s from './PackagesExample.module.scss'
import images from '../../../assets/Images'


const PackagesExample = () => {
  return (
    <div className={s.packagesExampleContainer}>
        <div className={s.packagesImg1}>
            <div className={s.texts}>
                <div className={s.priceAndDays}>
                    <div>3 days ,2 nights</div>
                    <div className={s.price}>$500 / Person</div>
                </div>
                <div className={s.packagesDescription}>
                    Explore the Beauty of the island for 3 days and 2 nights with our travel agency
                </div>
                <div className={s.packagesLoc}>
                    <div className={s.locContainer}>
                        <img src={images.locationIcon} alt='LocIcon' />
                        <div>Indonesia</div>
                    </div>
                    <div className={s.knowMore}>Know More</div>
                </div>
            </div>
        </div>
        <div className={s.packagesImg2}>
            <div className={s.texts}>
                <div className={s.priceAndDays}>
                    <div>3 Days, 2 NIghts</div>
                    <div className={s.price}>$800 / Person</div>
                </div>
                    <div className={s.packagesDescription}>
                        Enjoy the Shrimes and blossoms here in this beautiful country
                    </div>
                <div className={s.packagesLoc}>
                    <div className={s.locContainer}>
                        <img src={images.locationIcon} alt='Loaction Icon' />
                        <div>Japan</div>
                    </div>
                    <div className={s.knowMore}>Know More</div>
                </div>
            </div>
        </div>
        <div className={s.packagesImg3}>
            <div className={s.texts}>
                <div className={s.priceAndDays}>
                    <div>3 Days, 2 NIghts</div>
                    <div className={s.price}>$600 / Person</div>
                </div>
                <div className={s.packagesDescription}>
                    Explore the majestic mountains and landscapes day and nights
                </div>
                <div className={s.packagesLoc}>
                    <div className={s.locContainer}>
                        <img src={images.locationIcon} alt='' />
                        <div>Mountains</div>
                    </div>
                    <div className={s.knowMore}>Know More</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackagesExample