import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'


function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                     </div>
                     <div>
                        <p>123 Housing Society</p>
                        <p>Bangladesh</p>
                     </div>
            </div>
            <div className="phone">
                <h4>  <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            1-2323-343-23 </h4>
           
            </div>
            <div className="email">
                <h4>  <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            info@gmail.com </h4>
           
            </div>
            <div className="left"></div>
        </div>
    </div>
  )
}

export default Footer