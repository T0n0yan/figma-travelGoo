import React from 'react'
import s from '../Packages/Packages.module.scss'
import Buttons from './Buttons/Buttons'
import PackagesExample from './PackagesExamples/PackagesExample.jsx'
 

const Packages = () => {
  return (
    <div className={s.packagesContainer}>
      <div className={s.packagesText}>Best Packages For You</div>
      <Buttons />
      <PackagesExample />
    </div>
    
  )
}

export default Packages