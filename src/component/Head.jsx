import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdPhoneForwarded } from "react-icons/md";

const Head = () => {
  return (
   <header>
<p> <CiLocationOn className='icon'/>Plot No. 1 ,
3rd
Floor Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026
</p>
<p><CiMail className='icon'/>
info@notioninsurance.com</p>
<p><MdPhoneForwarded />91-9302182475
</p>
<p><MdPhoneForwarded className='icon'/>0755-4911343</p>
   </header>
  )
}

export default Head