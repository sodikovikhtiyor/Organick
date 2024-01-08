import React from 'react'
import './Shop.scss'
import Showcase from '../about-showcase/Showcase'
import shopShowcase from '../../assets/shop-banner.png'
import Products from '../products/Products'
import Subscribe from '../subscribe/Subscribe'
function Shop() {
  return (
    <>
     <Showcase text="Shop" backgroundImage={shopShowcase} height='350px'/>   
     <Products/>
     <Subscribe/>
     
    </>
  )
}

export default Shop