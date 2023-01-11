import React from 'react'
import logos from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {


  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={logos}
      />

    </div>
  )
}

export default Logo;
