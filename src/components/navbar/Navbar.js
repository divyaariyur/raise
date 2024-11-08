import React, {useState} from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo">
                <h2>RAISE</h2>
                
            </div>
            
              <img 
                src={logo}  
                alt='logo' 
                style={{
                    width: '10%', 
                    height: 'auto',
                    marginTop: '20px',
                    marginRight: '10px',
                    '@media (max-width: 940px)': {
                    width: '20%',
                    marginTop: '100px',
                    },
                }}
                />
            </div>
            
            <ul className="nav-menu">
                <Link to='aboutinvisible' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='selectindex' smooth={true} duration={500} ><li>Invisible Disability Index</li></Link>
                <Link to='supportguide' smooth={true} duration={500} ><li>Support Guide</li></Link>
                <Link to='aboutme' smooth={true} duration={500} ><li>About</li></Link>
                <Link to='contact' smooth={true} duration={500} ><li>Contact</li></Link>
                </ul>
            <div className="nav-icons" style={{ marginRight: '1rem' }}>
               
            </div>
            <div className="hamburger dark" onClick={handleNav}>
                    {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='aboutinvisible' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='selectindex' smooth={true} duration={500} ><li>Invisible Disability Index</li></Link>
                <Link to='supportguide' smooth={true} duration={500} ><li>Support Guide</li></Link>
                <Link to='aboutme' smooth={true} duration={500} ><li>About</li></Link>
                <Link to='contact' smooth={true} duration={500} ><li>Contact</li></Link>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar;