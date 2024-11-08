import React from 'react'
import './AbouttsStyles.css'
import abouttsimg from '../../assets/abouttsimg.jpg'
import tsdykimg from '../../assets/tsdykimg.jpg'
import symptomstsimg from '../../assets/symptomstsimg.jpg'
import tstypesofticsimg from '../../assets/tstypesofticsimg.jpg'
import { Link } from 'react-scroll'
 
function AboutTS() {
    return (
        <div name='tssection' className='aboutts'>
            <div className="container">
            
                <h1>Tourette Syndrome</h1>
                    <h2>What is Tourette Syndrome?</h2>
                    <br />
                    <p>Tourette syndrome is a neurological condition that affects the brain and nerves, causing people to make repetitive movements or sounds, called tics that cannot be easily controlled.</p> 
                    <br />
                    <p>Tics usually start between the ages of 2 and 15, with average being around 6 years of age. The symptoms can range from mild to severe and may change over time.</p>
                    <br />
                    <p>About 200,000 Americans have the most severe form of Tourette syndrome and about 1 in 100 people in the U.S. have milder symptoms. Currently there is no cure for Tourette Syndrome.
                    </p>
                    
                    <div className="right">
                    <div className="promo">
                       
                        <img src={abouttsimg}  text='ADHD' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='tssection' className='dykts'>
<div className="container">
<br />
        <h2>Did you know about Tourette Syndrome</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>Tourette Syndrome is an <span style={{color: 'red', fontWeight: 'bold'}}>invisible disability.</span></li> 
            <li className='li'>Studies have estimated that <span style={{color: 'red', fontWeight: 'bold'}}>1 / 162 children aged 5 - 17 </span>in the U.S. has Tourette syndrome.</li> 
            <li className='li'>Most children diagnosed with TS also have been diagnosed with at least one additional mental, behavioral, or developmental disorders.</li> 
            <li className='li'>Children 12–17 years of age were more than twice as likely to have a diagnosis of TS than children 6–11 years of age</li>            
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={tsdykimg}  text='UC' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='tssection' className='causests'>
            <div className="container">
                    <br />
                    <h2>Causes of Tourette Syndrome</h2>
                    <br />
                    <p>The exact cause of Tourette Syndrome is not known. Research suggests that it is an inherited genetic condition. That means it is passed on from parent to child through genes.
                    </p>
                    <br />
            </div>
    </div>

    <div name='tssection' className='typesofticsts'>
            <div className="container">
            
                    <h2>Types of Tics</h2>
                    <br />
                    <p>In Tourette Syndrome, tics are involuntary movements or sounds that can be classified into two main types: motor tics and vocal tics.
                    </p> 
                    <div className="right">
                        <div className="promo">
                        
                            <img src={tstypesofticsimg}  text='tstypesofticsimg' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>

    <div name='tssection' className='symptomsts'>
            <div className="container">
            
                    <h2>Symptoms of Tourette Syndrome</h2>
                    <br />
                    <p>Tourette Syndrome typically begins between the ages of 5 and 10, with the first symptoms usually appearing in the head and neck area. Overtime, the tics may spread to other parts of the body or become more complex.
                    </p> 
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomstsimg}  text='symptomsuc' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='tssection' className='challengests'>
            <div className="container">
                    <br />
                    <h2>Challenges of Tourette Syndrome</h2>
                    <br />
                    <p>A person with Tourette syndrome (TS) may face several challenges, including:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Social Stigma: </span>
                    <div className="paragraph-content">
                        <p>The tics, especially if visible or loud, may draw unwanted attention, leading to teasing or bullying from peers who don’t understand the condition.
                        </p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Concentration Issues: </span>
                    <div className="paragraph-content">Tics can make it difficult to focus in class, affecting their ability to concentrate on schoolwork and follow lessons.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Embarrassment: </span>
                    <div className="paragraph-content">A person with Tourette Syndrome may feel embarrassed or self-conscious about their tics, especially in social or group settings, leading to isolation.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stress and Anxiety: </span>
                    <div className="paragraph-content">Stress often makes tics worse, and the pressure to control tics in public can increase anxiety, which creates a cycle of worsening symptoms.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Difficulty with Physical Activities: </span>
                    <div className="paragraph-content">Certain motor tics might interfere with physical activities, making sports or playground activities more challenging.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Disruptions to Learning: </span>
                    <div className="paragraph-content"> Frequent tics may interrupt class or require the person with Tourette Syndrome to take breaks, making it harder to keep up with lessons and schoolwork.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Frustration and Fatigue: </span>
                    <div className="paragraph-content">Trying to suppress tics can be exhausting and frustrating, as it takes a lot of energy and focus.
                    </div></li>

                    <br />
            </div>
    </div>

    <div name='tssection' className='supportts'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Tourette Syndrome</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Educate Yourself:</span>
                    <div className="paragraph-content">Learn about Tourette Syndrome to better understand what the person is experiencing.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Empathetic:</span>
                    <div className="paragraph-content">Show understanding and empathy. Avoid making negative comments about the person’s tics.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Inclusive:  </span>
                    <div className="paragraph-content">Make an effort to include them in group activities, ensuring they feel welcome and accommodated.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stand Up Against Bullying:</span>
                    <div className="paragraph-content">If you witness teasing or bullying, stand up against it and support them.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be a Good Listener:</span>
                    <div className="paragraph-content"> Offer a supportive ear if they need to talk about their experiences, without judgment or trying to "fix" the situation.                    </div></li>
                    <br />
                    <br />
            </div>
    </div>
        
    <div name='tssection' className='sourcests'>
            <div className="container">
                   
                    <h2>Tourette Syndrome Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://www.americanbrainfoundation.org/diseases/tourette-syndrome/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                        American Brain Foundation
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.cdc.gov/tourette-syndrome/about/?CDC_AAref_Val=https://www.cdc.gov/ncbddd/tourette/facts.html" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                        Centers for Disease Control and Prevention
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/tourette-syndrome/symptoms-causes/syc-20350465" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                        Mayo Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.ninds.nih.gov/health-information/disorders/tourette-syndrome" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                        National Institute of Neurological Disorders and Stroke (NINDS)
                        </a>
                    </p>
                    
                    
                    <p>
                        <a 
                            href="https://thetourettecbitfoundation.org/about-tourette-syndrome-1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                        The Tourette CBIT Foundation
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://tourette.org/about-tourette/overview/what-is-tourette/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="ts-sources-link"
                        >
                       Tourette Association of America
                        </a>
                    </p>
                    
                    <br />
                    <br />
            </div>
    </div>
    
<Link to='selectindex' smooth={true} duration={500} ><p className="blue-text">Back to index</p></Link>

</div>
</div>
</div>

    )
}

export default AboutTS