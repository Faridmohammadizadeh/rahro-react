import React from 'react'
import './header.css'
import hero from '../../assets/hero.png'

const Header = () => {
  return (
    <div className='rahro__header section__padding' id='home'>
      <div className='rahro__header-content'>
        <h1>راهتو پیدا کن</h1>
        <div className='rahro-header-content-div'>
          <p>در <span className='rahro-green'>راهرو</span> صد ها منتور با تجربه آماده اند
          </p>
          <p className='breakline'>تا شما را برای رسیدن به کریر حرفه ایتان راهنمایی کنند.</p>
        </div>
        <div className='rahro__header-content__button'>
          <button type="button">همین حالا ثبت نام کن</button>
        </div>
      </div>
      <div className='rahro__header-image'>
        <img src={hero} alt='hero' />
      </div>
    </div>
  )
}

export default Header