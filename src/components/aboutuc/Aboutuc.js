import React from 'react'
import './AboutucStyles.css'
import AboutUCimg from '../../assets/AboutUCimg.jpg'
import dykuc from '../../assets/dykuc.jpg'
import symptomsuc from '../../assets/symptomsuc.jpg'
//import pdfUrl from './guide.pdf'
//import pdfUrl from 'https://flipbooks.fleepit.com/f-68747-test'
//import { Document, Page } from 'react-pdf';



import { Link } from 'react-scroll'
 
function AboutUC() {
    return (
        <div name='ucsection' className='aboutuc'>
           
            <div className="container">
                <h1>Ulcerative Colitis</h1>
                    <h2>What is Ulcerative Colitis?</h2>
                    <br />
                    <p>Ulcerative Colitis (UC) is a chronic condition that causes inflammation (swelling) and sores (ulcers) in the inner lining of the large intestine (the colon and rectum).</p> 
                    <br />
                    <p>Ulcerative Colitis is one of the two major types of inflammatory bowel disease (IBD), which affects the digestive system.</p>
                    <br />
                    <p>In a healthy digestive system, food moves through your stomach and intestines, and your body absorbs nutrients while getting rid of waste. But in people with ulcerative colitis, the immune system mistakenly attacks the colon’s lining, causing it to become inflamed. This inflammation leads to lesions, sores or ulcers in the wall of the large intestine.
                    </p>
                    <br />
                    <p>Ulcerative Colitis is a life-long condition that can cause discomfort, pain and other complications over time. </p>
                <div className="right">
                    <div className="promo">
                       
                        <img src={AboutUCimg}  text='ADHD' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>

            <div className="container">
            <br />
                    <h2>Did you know about Ulcerative Colitis?</h2>
                    <ul classname="ul">
                    <br/ >
                        <li className='li'>Ulcerative Colitis is an <span style={{color: 'red', fontWeight: 'bold'}}>invisible disability.</span></li> 
                        <li className='li'>Inflammatory Bowel Disease affects 5 million people worldwide.</li> 
                        <li className='li'>Ulcerative Colitis is one of the most common types of inflammatory bowel disease.</li>
                        <li className='li'>About <span style={{color: 'red', fontWeight: 'bold'}}>25 percent </span>of people diagnosed with Crohn’s or ulcerative colitis in the United States are <span style={{color: 'red', fontWeight: 'bold'}}>younger than 20</span>, with most cases appearing during the adolescent years.</li>
                        <li className='li'>Ulcerative colitis substantially increases the risk of colon cancer.</li>
                        <li className='li'>Currently, there is no known cure for Ulcerative Colitis.</li>

                    </ul>
            
                    <div className="right">
                        <div className="container">
                            <div className="promo">
                                <img src={dykuc}  text='UC' style={{width: '60%', height: 'auto'}}/>   
                            </div>
                        </div>
                            
                    </div>
            </div>        
            <div className="container">
                    <br />
                    <h2>Causes of Ulcerative Colitis</h2>
                    <br />
                    <p>The exact cause of ulcerative colitis is not fully understood, but several factors are believed to contribute to its development. These include:</p>
                    <li>Abnormal Autoimmune response</li>
                    <li>Genetics</li> 
                    <li>Environmental factors</li>
                    <li>Diet</li>
                    <li>Lifestyle</li>
                    <br />
            </div>
    
            <div className="container">
            
                    <h2>Symptoms of Ulcerative Colitis</h2>
                    <br />
                    <p>Ulcerative Colitis is a chronic condition and the symptoms are different for everyone. Some may experience constant symptoms, while for others, symptoms can flare up every few weeks or months.</p> 
                    <br />
                    <p>The most common symptoms during a flare-up are:</p>
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomsuc}  text='symptomsuc' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
      
            <div className="container">
                    <br />
                    <h2>Challenges of Ulcerative Colitis</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Frequent Bathroom Breaks: </span>
                    <div className="paragraph-content">
                        <p>Urgent trips to the bathroom, often multiple times a day, can be disruptive and embarrassing.</p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Fatigue: </span>
                    <div className="paragraph-content">Chronic tiredness is common due to inflammation and nutritional deficiencies, making it hard to keep up with school and social activities.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Abdominal Pain and Discomfort: </span>
                    <div className="paragraph-content">Painful cramps and discomfort can make it hard to focus in class or participate in sports.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Dietary Restrictions: </span>
                    <div className="paragraph-content">Certain foods may trigger symptoms, making eating with friends or at school events difficult.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Absences: </span>
                    <div className="paragraph-content">Flare-ups or medical appointments may cause frequent absences from school, leading to missed lessons and social isolation.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Emotional Stress: </span>
                    <div className="paragraph-content">Coping with a chronic illness at a young age can lead to anxiety, depression, or embarrassment.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stigma and Misunderstanding: </span>
                    <div className="paragraph-content">Ulcerative Colitis is an invisible illness, and others may not understand the severity of the condition.</div></li>
                    <br />
            </div>
    
            <div className="container">
                    <br />
                    <h2>How can you support someone with Ulcerative Colitis</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Be Understanding About Bathroom Breaks:</span>
                    <div className="paragraph-content">Avoid drawing attention or making jokes if your peer needs to leave class frequently.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be inclusive:</span>
                    <div className="paragraph-content">Plan inclusive activities that accommodate their energy levels and dietary needs.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stand Up Against Stigma:  </span>
                    <div className="paragraph-content">Advocate for them if others make insensitive comments or misunderstand their condition.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Respect Their Privacy:</span>
                    <div className="paragraph-content">Don’t ask too many personal questions or share information about their condition without permission.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be a Good Listener:</span>
                    <div className="paragraph-content"> Offer a supportive ear if they need to talk about their experiences, without judgment or trying to "fix" the situation.                    </div></li>
                    <br />
                    <br />
            </div>
    
            <div className="container">
                   
                    <h2>Ulcerative Colitis Sources</h2>
                    <br />
                    
                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/10351-ulcerative-colitis" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.crohnscolitisfoundation.org/patientsandcaregivers/what-is-ulcerative-colitis/symptoms" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        Crohns & Colitis Foundation
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.health.harvard.edu/a_to_z/ulcerative-colitis-a-to-z" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        Harvard Medical School
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/ulcerative-colitis/symptoms-causes/syc-20353326#:~:text=Ulcerative%20colitis%20is%20an%20inflammatory,And%20that%20includes%20the%20rectum" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        Mayo Clinic
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.mycrohnsandcolitisteam.com/resources/race-and-ethnicity-in-pediatric-ibd-care-improving-outcomes-for-children" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        MyCrohnsAndColitisTeam
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.niddk.nih.gov/health-information/digestive-diseases/ulcerative-colitis" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                        National institute of Diabetes and Digestive and Kidney Diseases
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/ulcerative-colitis" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="uc-sources-link"
                        >
                       Penn Medicine
                        </a>
                    </p>
                    <br />
                    <br />
            </div>
            
                <div className="container">
            
                    <Link to='selectindex' smooth={true} duration={500} ><p className="blue-text">Back to index</p></Link>
                </div>
<br />
<br />

            <div name='ucsection' className='supportguide'>
            <div className="container">
                
                   
                    <h2>Support Guide</h2>
                    <br />
                                        
                    <iframe 
                        allowFullScreen="allowfullscreen" 
                        scrolling="no" 
                        className="fp-iframe" 
                        src="https://heyzine.com/flip-book/d60cb63645.html" 
                        style={{
                            border: '1px solid lightgray',
                            width: '100%',
                            height: '400px'
                        }}
                    />
                    <br />
            </div>
            </div>
            <div className="container">
                <Link to='aboutinvisible' smooth={true} duration={500} ><p className="blue-text">Back to Homepage</p></Link>
            </div>
</div>

    )
}

export default AboutUC