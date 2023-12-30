import "./FooterStyle.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    1-2323-343-23</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    info@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Enthusiastic ECE student, Chetali, with a strong interest in software development. Proficient in Java, HTML,
                CSS, JavaScript, and Data Structures and Algorithms</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer