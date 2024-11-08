import React from 'react'
import './AboutlupusStyles.css'
import aboutlupusimg from '../../assets/aboutlupusimg.jpg'
import dyklupusimg from '../../assets/dyklupusimg.jpg'
import symptomslupusimg from '../../assets/symptomslupusimg.jpg'
import { Link } from 'react-scroll'
 
function AboutLupus() {
    return (
        <div name='lupussection' className='aboutlupus'>
            <div className="container">
            
                <h1>Lupus</h1>
                    <h2>What is Lupus?</h2>
                    <br />
                    <p>Lupus is a chronic autoimmune disease that causes inflammation and pain in various parts of the body, including the skin, joints, kidneys, heart, lungs, blood vessels, and brain. It occurs when the immune system, which usually protects the body, mistakenly attacks healthy tissues.</p> 
                    <br />
                    <p>Unlike some autoimmune diseases that affect specific organs, lupus can impact several areas of the body at once or over time. This complexity often leads to lupus being called "the great imitator" because its symptoms can mimic those of many other conditions.</p>
                    <br />
                    <p>Lupus is a lifelong condition marked by periods of illness, known as flares, and times of remission when symptoms ease.</p>
                    
                    <div className="right">
                    <div className="promo">
                       
                        <img src={aboutlupusimg}  text='aboutlupus' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='lupussection' className='dyklupus'>
<div className="container">
<br />
        <h2>Did you know about Lupus?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>Lupus is an <span style={{color: 'red', fontWeight: 'bold'}}>invisible disability.</span></li> 
            <li className='li'>On an average, it nearly takes <span style={{color: 'red', fontWeight: 'bold'}}>6 years </span>for people with lupus to be diagnosed, from the time they first notice their lupus symptoms.</li> 
            <li className='li'>People with lupus have a higher risk of developing other health problems, like heart disease and osteoporosis.</li> 
            <li className='li'>1 in 4 are either temporarily or permanently disabled by the disease.</li>       
            <li className='li'><span style={{color: 'red', fontWeight: 'bold'}}>65% of children </span>with lupus develop neuropsychiatric involvement (lupus that affects the brain)</li>
            <li className='li'><span style={{color: 'red', fontWeight: 'bold'}}>80% of children with lupus </span>develop nephritis (inflammation of the kidneys) </li>     
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dyklupusimg}  text='dyklupus' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>   
        </div>
        
    <div name='lupussection' className='causeslupus'>
            <div className="container">
                    <br />
                    <h2>Causes of Lupus</h2>
                    <br />
                    <p>The exact cause of lupus is unknown. Potential triggers include:
                    </p>
                    <br />
                    <li>Sunlight</li>
                    <li>Infections</li>
                    <li>Certain medications</li>
                    <li>Stress</li>
            </div>
            <br />
    </div>

    
    <div name='lupussection' className='symptomslupus'>
            <div className="container">
            
                    <h2>Symptoms of Lupus</h2>
                    <br />
                    <p>Common symptoms of lupus include:
                    </p> 
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomslupusimg}  text='symptomslupus' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='lupussection' className='challengeslupus'>
            <div className="container">
                    <br />
                    <h2>Challenges of Lupus</h2>
                    <br />
                    <p>A person with lupus may face several challenges, including:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Unpredictable Flares: </span>
                    <div className="paragraph-content">
                        <p> Lupus is marked by periods of illness (flares) and remission, making it difficult to maintain a consistent routine. A person with lupus may miss school unexpectedly or struggle to complete assignments on time.</p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Fatigue: </span>
                    <div className="paragraph-content">Extreme tiredness, a common and debilitating symptom of lupus, can make it difficult for an individual with lupus to concentrate.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Pain: </span>
                    <div className="paragraph-content">Joint pain and inflammation can limit mobility, making it hard to participate in physical activities, carry books, or sit for long periods.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Cognitive Issues: </span>
                    <div className="paragraph-content">Lupus can cause "brain fog," affecting memory, focus, and the ability to process information, which can impact learning and test performance.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Absences and Catching Up: </span>
                    <div className="paragraph-content"> Frequent doctor appointments or hospital visits may lead to missed school days, and catching up on missed work can be overwhelming.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Sun Sensitivity: </span>
                    <div className="paragraph-content"> Photosensitivity may limit time outdoors, making it difficult to participate in outdoor activities, sports, or field trips.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Social and Emotional Impact: </span>
                    <div className="paragraph-content">The unpredictability of lupus can create anxiety about keeping up with peers, and the physical symptoms may cause feelings of isolation or frustration.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Mental Health Challenges: </span>
                    <div className="paragraph-content">Dealing with the chronic nature of lupus, alongside the demands of school, can lead to stress, anxiety, or depression, further affecting academic performance.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Increased Risk of Infections: </span>
                    <div className="paragraph-content">Due to a weakened immune system, individuals with lupus are at a higher risk of infections.</div></li>

                    <br />
            </div>
    </div>

    <div name='lupussection' className='supportlupus'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Lupus</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Educate Yourself:</span>
                    <div className="paragraph-content">Learn about lupus to better understand what the person is experiencing.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Understanding:</span>
                    <div className="paragraph-content">Recognize that lupus symptoms can vary greatly from day to day.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Patient: </span>
                    <div className="paragraph-content">Understand that recovery from a flare can take time.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Raise Awareness:</span>
                    <div className="paragraph-content">Help educate others about lupus to increase understanding and support.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be a Good Listener:</span>
                    <div className="paragraph-content"> Offer a supportive ear if they need to talk about their experiences. Sometimes, just being there to listen can make a big difference.</div></li>
                    <br />
                    <br />
            </div>
    </div>
        
    <div name='lupussection' className='sourceslupus'>
            <div className="container">
                   
                    <h2>Lupus Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Lupus" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="lupus-sources-link"
                        >
                        American College of Rheumatology 
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.cdc.gov/lupus/about/index.html" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="lupus-sources-link"
                        >
                        Centers for Disease Control and Prevention
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.lupus.org/resources/what-is-lupus" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="lupus-sources-link"
                        >
                        Lupus Foundation of America
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="lupus-sources-link"
                        >
                        Mayo Clinic 
                        </a>
                    </p>
                    
                    
                    <p>
                        <a 
                            href="https://www.niams.nih.gov/health-topics/lupus" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="lupus-sources-link"
                        >
                        National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)
                        </a>
                    </p>
                    
                    <br />
                    <br />
            </div>
    </div>
    
<Link to='selectindex' smooth={true} duration={500} ><p className="blue-text"> Back to index</p></Link>
<br />

</div>
</div>
</div>

    )
}

export default AboutLupus