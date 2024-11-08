import React from 'react'
import './Support.css'

import About from '../../assets/ADHD.jpg'

function Support() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>What can you do to support</h2>
                    <ul classname="ul">
                    <br/ >
                        <li className='li'>80% of world’s 1 billion people with disabilities have an invisible disability.
                        <br/ > Source: WHO, UN</li> 
                            <br/ >
                        <li className='li'>Approximately 15% of students in the United States are reported to have some form of disability, most of which are "invisible disabilities" 
                        <br/ >Source: National Center for Education Statistics (NCES)</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="promo">
                    <img src={About}  text='ADHD'/>
            
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Support