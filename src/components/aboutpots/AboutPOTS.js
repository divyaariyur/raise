import React from 'react'
import './AboutPOTSStyles.css'
import aboutpotsimg from '../../assets/aboutpotsimg.jpg'
import dykpotsimg from '../../assets/dykpotsimg.jpg'
import symptomspotsimg from '../../assets/symptomspotsimg.jpg'
import { Link } from 'react-scroll'
 
function AboutPOTS() {
   
    return (
        <div name='potssection' className='aboutpots'>
            <div className="container">
                <br />
                <h1>Postural Orthostatic Tachycardia Syndrome (POTS)</h1>
                <br />
                    <h2>What is POTS?</h2>
                    <br />
                    <p>Postural Orthostatic Tachycardia Syndrome (POTS) is a chronic condition in which individuals experience a rapid heart rate, lightheadedness, fatigue, or other symptoms when transitioning from sitting or lying down to standing.</p> 
                    <br />
                    <p>POTS is often caused by a malfunction in the autonomic nervous system, which controls automatic body functions such as heart rate and blood pressure.</p>
                    <br />
                    <p>This condition affects individuals differently—some may experience mild symptoms, while for others, it can significantly impact daily life.</p>
                    <br />
                    <p>POTS typically begins in the teenage years or early adulthood, with women between the ages of 15 and 50 being the most commonly diagnosed.
                    </p>
                    <br />

                    <h2>What does POTS stand for?</h2>
                    <br />
                    <p><strong>Postural: </strong>Pertaining to the position of the body</p> 
                    <br />
                    <p><strong>Orthostatic: </strong>Related to standing upright</p>
                    <br />
                    <p><strong>Tachycardia: </strong>Abnormal increase in heart rate upon standing</p>
                    <br />
                    <p><strong>Syndrome: </strong>a group of symptoms that happen together</p>
                    <br />
                    
                    <div className="right">
                    <div className="promo"> 
                        <img src={aboutpotsimg}  text='Pots' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='potssection' className='dykpots'>
<div className="container">
<br />
        <h2>Did you know about POTS?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>POTS is an <span style={{color: 'red', fontWeight: 'bold'}}> invisible disability.</span></li>
            <li className='li'>POTS is a syndrome, not a disease. A syndrome is a group of signs and symptoms that occur together and characterize a specific condition. POTS may cause symptoms throughout the body, including tachycardia, palpitations, chest pains, lightheadedness, fainting, nausea, fatigue, and blood pooling in the extremities.</li>
            <li className='li'>50% of patients develop POTS after an infection.</li>
            <li className='li'>POTS is not contagious.</li>
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykpotsimg}  text='POTS' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='potssection' className='causespots'>
            <div className="container">
                    <br />
                    <h2>Causes of POTS</h2>
                    <br />
                    <p>Although the exact cause of POTS is unknown, it is believed to be a disorder of the autonomic nervous system, which regulates heart rate and blood pressure. </p>
                    <br />
            </div>
    </div>

    <div name='potssection' className='symptomspots'>
            <div className="container">
            
                    <h2>Symptoms of POTS</h2>
                    <br />
                    <p>People with POTS may experience the following symptoms:</p>
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomspotsimg}  text='symptomspots' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='potssection' className='challengespots'>
            <div className="container">
                    <br />
                    <h2>Challenges of POTS</h2>
                    <br />
                    <p>People with Postural Orthostatic Tachycardia Syndrome (POTS) face a variety of challenges due to the condition's wide range of symptoms and its impact on daily life. These challenges include:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Severe Fatigue:</span>
                    <div className="paragraph-content">
                        <p>Many people with POTS experience chronic, debilitating fatigue, which can interfere with their ability to carry out daily activities. The fatigue is not just a result of the increased heart rate but also due to the body’s difficulty regulating blood flow and oxygen levels, leading to low energy levels.
                        </p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Dizziness and Fainting:</span>
                    <div className="paragraph-content">The main symptom of POTS is orthostatic intolerance, where standing up leads to dizziness, lightheadedness, or even fainting. This can make routine activities like walking or standing in line difficult.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Tachycardia:</span>
                    <div className="paragraph-content">Rapid heart rate upon standing can cause feelings of heart palpitations, chest pain, and shortness of breath. These symptoms are particularly distressing and can limit physical activity.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Brain Fog:</span>
                    <div className="paragraph-content">People with POTS often report difficulty with concentration, memory, and clear thinking, a symptom commonly referred to as “brain fog.” This cognitive dysfunction can make work, school, or daily tasks challenging.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Digestive Issues:</span>
                    <div className="paragraph-content">Many individuals with POTS experience gastrointestinal symptoms such as nausea, bloating, constipation, or diarrhea. These issues are believed to result from abnormal autonomic control of the digestive system, further impacting quality of life.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Sleep Problems: </span>
                    <div className="paragraph-content">Sleep disturbances, including insomnia and poor sleep quality, are common in people with POTS. Some may experience difficulty falling asleep or staying asleep, while others suffer from excessive daytime sleepiness despite poor sleep at night.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Emotional and Mental Health Challenges:</span>
                    <div className="paragraph-content">The chronic nature of POTS and its symptoms can lead to emotional stress, anxiety, and depression. Many people feel isolated or misunderstood because POTS is an "invisible illness" that is not always easily recognized by others.</div></li>                    
                    <li><span style={{fontWeight: 'bold'}}>Physical Limitations:</span>
                    <div className="paragraph-content">Many people with POTS are unable to engage in normal physical activities due to rapid heart rate, dizziness, and fatigue. This can lead to deconditioning, further reducing their ability to exercise or stay active.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Education Challenges:</span>
                    <div className="paragraph-content">Due to the unpredictable nature of POTS symptoms, individuals experiencing POTS may find it difficult to maintain regular attendance at school. The cognitive impairments, fatigue, and physical limitations can hinder performance.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Social Isolation:</span>
                    <div className="paragraph-content">Many individuals experience social isolation due to their limited ability to engage in activities, leaving them feeling disconnected from friends and family. This can further exacerbate emotional and mental health struggles.</div></li>
                    
                    <br />
            </div>
    </div>

    <div name='potssection' className='supportpots'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with POTS</h2>
                    <br />
                   
                    <li><span style={{fontWeight: 'bold'}}>Educate Yourself:</span>
                    <div className="paragraph-content">Learn about POTS to better understand and support someone who may be living with this condition.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Understanding and Patient: </span>
                    <div className="paragraph-content">Individuals with POTS may deal with symptoms like fatigue, dizziness, or brain fog, which can affect their ability to concentrate or keep up with school activities. Offering patience and understanding can help reduce their stress in school.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Assist with Physical Tasks:</span>
                    <div className="paragraph-content">POTS can cause weakness, dizziness, and fatigue, making physical tasks more difficult. Offering assistance with tasks like carrying books or walking to classes could be helpful.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Encourage Social Inclusion: </span>
                    <div className="paragraph-content">POTS can lead to isolation because physical limitations may prevent them from participating in extracurricular activities, social events, or group work.
                        <br />Invite them to social activities, even if they may not always be able to attend.
                        <br />Include them in group discussions or projects, and be mindful of their need for breaks or adjustments to the workload.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Provide Emotional Support:</span>
                    <div className="paragraph-content">Living with POTS can be stressful and emotionally draining. Being a good friend who listens and offers emotional support can make a big difference.
                    </div></li>
                    <br />
                   
            </div>
    </div>

    <div name='potssection' className='sourcespots'>
            <div className="container">
                   
                    <h2>POTS Sources</h2>
                    <br />
                   
                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/16560-postural-orthostatic-tachycardia-syndrome-pots" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pots-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.dysautonomiainternational.org/pdf/10FactsAboutPOTS.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pots-sources-link"
                        >
                        Dysautonomia International - Facts about POTS 
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.health.harvard.edu/blog/pots-diagnosing-and-treating-this-dizzying-syndrome-202110062611" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pots-sources-link"
                        >
                        Harvard Health
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.ninds.nih.gov/health-information/disorders/postural-tachycardia-syndrome-pots" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="pots-sources-link"
                        >
                        National Institute of Neurological Disorders and Stroke
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

export default AboutPOTS