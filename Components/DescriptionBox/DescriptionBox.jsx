import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to GlowCart-Your go-to beauty destination.
        Explore a wide range of premium skincare and makeup products designed to suit every skin type and style. From nourishing moisturizers and cleansers to vibrant lipsticks and flawless foundations, we've got everything you need to feel confident and radiant. Experience beauty that empowers—every day, your way.</p>
        <p>We believe beauty should be simple, fun, and accessible. That's why we offer cruelty-free, high-quality formulas made with care. Whether you're refreshing your daily routine or trying something bold and new, GlowCart is here to help you glow from the inside out.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
