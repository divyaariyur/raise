 import React from 'react'
import './SelectsStyles.css'

import ADHD from '../../assets/ADHD.jpg'
import Crohns from '../../assets/Crohns.jpg'
import Dyslexia from '../../assets/Dyslexia.jpg'
import Epilepsy from '../../assets/Epilepsy.jpg'
import Lupus from '../../assets/Lupus.jpg'
import POTS from '../../assets/POTS.jpg'
import Type1D from '../../assets/Type1D.jpg'
import Tourette from '../../assets/Tourette.jpg'
import Colitis from '../../assets/Colitis.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'

import { Link } from 'react-scroll'

function Selectindex() {
    return (
        <div name='selecttitle' className='selecttitle'>
            <div className="container">
                <div name='views' className='selectindex'>
                    <h2>Invisible Disability Index</h2>                        
                    <div className="container">
                            <Link to='aboutadhd' smooth={true} duration={500} ><SelectsImg bgImg={ADHD} text='ADHD'/></Link>
                            <Link to='aboutcrohns' smooth={true} duration={500} ><SelectsImg bgImg={Crohns} text='Crohns' /></Link>
                            <Link to='aboutdyslexia' smooth={true} duration={500} ><SelectsImg bgImg={Dyslexia} text='Dyslexia' /></Link>
                            <Link to='aboutepilepsy' smooth={true} duration={500} ><SelectsImg bgImg={Epilepsy} text='Epilepsy' /></Link>
                            <Link to='aboutlupus' smooth={true} duration={500} ><SelectsImg bgImg={Lupus} text='Lupus' /></Link>
                            <Link to='aboutpots' smooth={true} duration={500} ><SelectsImg bgImg={POTS} text='POTS' /></Link>
                            <Link to='aboutt1d' smooth={true} duration={500} ><SelectsImg bgImg={Type1D} text='Type 1 Diabetes' /></Link>
                            <Link to='aboutts' smooth={true} duration={500} ><SelectsImg bgImg={Tourette} text='Tourette Syndrome' /></Link>
                            <Link to='aboutuc' smooth={true} duration={500} ><SelectsImg bgImg={Colitis} text='Ulcerative Colitis' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selectindex