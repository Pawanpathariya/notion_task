import React from 'react'
import img from "../images/img.webp"

const Footer = () => {
  return (
    <div id='footer' className='container-fluid'>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img loading="lazy" src={img} width={300} className='img-fluid'/>
          <p className='mt-3' >
            Notion Insurance Broker Pvt. Ltd. delivers customized insurance solutions designed to meet the diverse needs of businesses and individuals.
          </p>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <ul>
                <h5>Licence</h5>
                <li><a href="/" >Licence No. 619</a></li>
                <li><a href="/" >IRDA Direct Broker Code: IRDA/ DB 693/17</a></li>
                <li><a href="/">Valid till: 02/10/2026</a></li>
                <li><a href="/">CIN: U66010MP2016PTC041677</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12">
              <ul>
                <h5 >Our Links</h5>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/our-partners">Our Partners</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12">
              <ul>
                <h5 >Legal and Admin Policies</h5>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms-conditions">Terms &amp; Conditions</a></li>
                <li><a href="/frequently-ask-question">FAQ's</a></li>
                <li><a href="/">Career</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

