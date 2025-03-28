import React from 'react'

import img from "../images/img.webp"
const Topbar = () => {
  return (
   <nav>
<img src={img} width={200}/>
    <a href="#">Home</a>
    <a href="#"> Insurances
    </a>
    <a href="#">About Us</a>
    <a href="#">Our Partners</a>
    <a href="#">Claim</a>
    <a href="#">Contact Us</a>

    <div>
        <button id='login'>LOG IN</button> 
        <button id='posp'>BECOME A POSP</button>
    </div>
   </nav>
  )
}

export default Topbar