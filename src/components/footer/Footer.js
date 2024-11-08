import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>RAISE</h3>
                   
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            
                            <li>Invisible Disability Index Images by Freepik (<a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">www.freepik.com</a>)</li>
                            <li>Banner Video by Pixabay</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer