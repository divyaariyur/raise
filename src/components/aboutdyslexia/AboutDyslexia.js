import React from 'react'
import './AboutDyslexiaStyles.css'
import aboutdyslexiaimg from '../../assets/aboutdyslexiaimg.jpg'
import dykdyslexiaimg from '../../assets/dykdyslexiaimg.jpg'
import symptomsdyslexiaimg from '../../assets/symptomsdyslexiaimg.jpg'
import { Link } from 'react-scroll'
 
function AboutDyslexia() {
   
    return (
        <div name='dyslexiasection' className='aboutdyslexia'>
            <div className="container">
                <br />
                <h1>Dyslexia</h1>
                <br />
                    <h2>What is Dyslexia?</h2>
                    <br />
                    <p>Dyslexia is a learning disorder that affects reading, writing, and spelling abilities. It is a neurological condition that impacts how the brain processes language, making it difficult for individuals to decode words, recognize sounds, and comprehend written text. Dyslexia is not related to intelligence or vision problems; rather, it is a specific learning disability that can affect people of all ages and backgrounds.</p> 
                    <br />
                    <div className="right">
                    <div className="promo"> 
                        <img src={aboutdyslexiaimg}  text='Dyslexia' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='dyslexiasection' className='dykdyslexia'>
<div className="container">
<br />
        <h2>Did you know about Dyslexia?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>Dyslexia is an <span style={{color: 'red', fontWeight: 'bold'}}> invisible disability.</span></li>
            <li className='li'>According to National institutes of Health, dyslexia affecs <span style={{color: 'red', fontWeight: 'bold'}}>1 in every 5 people </span>in the United States.</li>
            <li className='li'>Dyslexia affects up to <span style={{color: 'red', fontWeight: 'bold'}}>17% of the population </span>worldwide.</li>
            <li className='li'>Approximately <span style={{color: 'red', fontWeight: 'bold'}}>5% of school-aged children </span>in the United States have dyslexia.</li>
            
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykdyslexiaimg}  text='Dyslexia' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='dyslexiasection' className='causesdyslexia'>
            <div className="container">
                    <br />
                    <h2>Causes of Dyslexia</h2>
                    <br />
                    <p>The exact causes of dyslexia are not fully understood, but research suggests possible contributing factors as:
                    <br />
                    <li>Genetics</li>
                    <li>Differences in brain development and function</li>
                    </p>
                    <br />
            </div>
    </div>

    <div name='dyslexiasection' className='symptomsdyslexia'>
            <div className="container">
            
                    <h2>Symptoms of Dyslexia</h2>
                    <br />
                    <p>Symptoms of dyslexia can vary from person to person and may look different at various ages.</p>
                    <br />
                    <p>Common symptoms of Dyslexia include:</p>

                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomsdyslexiaimg}  text='symptomsdyslexia' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='dyslexiasection' className='challengesdyslexia'>
            <div className="container">
                    <br />
                    <h2>Challenges of Dyslexia</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Reading Difficulties:</span>
                    <div className="paragraph-content">
                        <p>Struggle with decoding words, reading fluency, and comprehension.
                        </p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Writing and Spelling:</span>
                    <div className="paragraph-content">Difficulty with written expression, organizing thoughts on paper, and spelling words correctly.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Slow Processing Speed:</span>
                    <div className="paragraph-content">Taking longer to complete reading and writing tasks compared to peers.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Low Self-Esteem:</span>
                    <div className="paragraph-content">Experiencing frustration and low self-confidence due to academic struggles.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Difficulty with Memorization:</span>
                    <div className="paragraph-content">Struggling to memorize facts, sequences, or memorize information.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Organizational Challenges:</span>
                    <div className="paragraph-content">Difficulty with time management, planning, and organizing tasks.</div></li>
                    <br />
            </div>
    </div>

    <div name='dyslexiasection' className='supportdyslexia'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Dyslexia</h2>
                    <br />
                   
                    <li><span style={{fontWeight: 'bold'}}>Educate Yourself:</span>
                    <div className="paragraph-content">Learn about dyslexia to better understand their experience and provide appropriate support.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Patient: </span>
                    <div className="paragraph-content">Understand that reading and writing may take longer or require more effort.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Focus on Strengths:</span>
                    <div className="paragraph-content">Emphasize and celebrate their strengths and talents in other areas.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Offer Help:</span>
                    <div className="paragraph-content">Ask if they need assistance with tasks that involve reading or writing, such as proofreading or summarizing text.</div></li>
                    <br />
                   
            </div>
    </div>

    <div name='dyslexiasection' className='sourcesdyslexia'>
            <div className="container">
                   
                    <h2>Dyslexia Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://www.psychiatry.org/patients-families/specific-learning-disorder" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        American Psychiatric Association  
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://dyslexiaida.org/dyslexia-basics/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        International Dyslexia Association (IDA)
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://ldaamerica.org/disabilities/dyslexia/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Learning Disabilities Association of America (LDA)
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552#:~:text=Dyslexia%20is%20a%20learning%20disorder,the%20brain%20that%20process%20language." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Mayo Clinic
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.ncld.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        National Center for Learning Disabilities (NCLD)
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://dyslexia.yale.edu/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Yale Center for Dyslexia & Creativity
                        </a>
                    </p>
                    
                    <br />
                    <br />
            </div>
    </div>
    
<Link to='selectindex' smooth={true} duration={500} ><p className="blue-text">Back to index</p></Link>
<br />

</div>
</div>
</div>

    )
}

export default AboutDyslexia 