import React from 'react'
import './AboutEpilepsyStyles.css'
import aboutepilepsyimg from '../../assets/aboutepilepsyimg.jpg'
import dykepilepsyimg from '../../assets/dykepilepsyimg.jpg'
import symptomsepilepsyimg from '../../assets/symptomsepilepsyimg.jpg'
import { Link } from 'react-scroll'
 
function AboutEpilepsy() {
   
    return (
        <div name='epilepsysection' className='aboutepilepsy'>
            <div className="container">
                <br />
                <h1>Epilepsy</h1>
                    <h2>What is Epilepsy?</h2>
                    <br />
                    <p>Epilepsy is a neurological condition that affects the brain and causes recurrent seizures. A seizure happens due to a sudden surge of electrical activity in the brain, leading to changes in behavior, movements, or awareness.</p> 
                    <br />
                    <div className="right">
                    <div className="promo"> 
                        <img src={aboutepilepsyimg}  text='EPilepsy' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='epilepsysection' className='dykepilepsy'>
<div className="container">
<br />
        <h2>Did you know about Epilepsy?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>Epilepsy is an <span style={{color: 'red', fontWeight: 'bold'}}> invisible disability.</span></li>
            <li className='li'><span style={{color: 'red', fontWeight: 'bold'}}>65 million people </span> worldwide are living with epilepsy.</li> 
             
            <li className='li'>1 in 10 people will experience a seizure during their lifetime.</li>
            <li className='li'>200, 000 new cases of epilepsy are diagnosed each year in the U.S.</li>
            <li className='li'><span style={{color: 'red', fontWeight: 'bold'}}>456,000 children </span>have epilepsy</li>
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykepilepsyimg}  text='Epilepsy' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='epilepsysection' className='causesepilepsy'>
            <div className="container">
                    <br />
                    <h2>Causes of Epilepsy</h2>
                    <br />
                    <p>The causes of epilepsy can vary from person to person and may be linked to many different factors, including:</p>
                    <br />
                    <li>Brain injury or trauma</li>
                    <li>Infections like meningitis</li> 
                    <li>Genetic factors</li>
                    <li>Developmental disorders like Autism</li>
                    <br />
                    <p>About 50 percent of epilepsy cases have no known cause.</p>
                    <br />
            </div>
    </div>

    <div name='epilepsysection' className='symptomsepilepsy'>
            <div className="container">
            
                    <h2>Symptoms of Epilepsy</h2>
                    <br />
                    <p>The main symptom of epilepsy is seizures.</p> 
                    <br />
                    <p>People with epilepsy may experience the following symptoms:</p>
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomsepilepsyimg}  text='symptomsepilepsy' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='epilepsysection' className='challengesepilepsy'>
            <div className="container">
                    <br />
                    <h2>Challenges of Epilepsy</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Seizure unpredictability:</span>
                    <div className="paragraph-content">
                        <p>Not knowing when a seizure will happen can cause anxiety and make it difficult to engage in daily activities, like school, work, or social events.</p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Medication side effects:</span>
                    <div className="paragraph-content">Anti-seizure medications can sometimes cause side effects like fatigue, dizziness, memory problems, or mood changes, impacting daily functioning.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stigma and misunderstanding:</span>
                    <div className="paragraph-content">Many people do not fully understand epilepsy, which can lead to social isolation, bullying, or discrimination.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Restrictions on activities:</span>
                    <div className="paragraph-content">Some activities, like driving, swimming, or certain sports, might be restricted due to the risk of having a seizure, limiting personal freedom.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Cognitive difficulties:</span>
                    <div className="paragraph-content">Seizures and epilepsy treatments can affect memory, concentration, and problem-solving skills, making school or work more challenging.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Emotional Stress: </span>
                    <div className="paragraph-content">People with epilepsy may experience stress, anxiety, or depression due to the condition and its impact on their lives.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Safety concerns:</span>
                    <div className="paragraph-content">During a seizure, there’s a risk of injury from falling or hitting objects, so maintaining a safe environment is essential.</div></li>
                    <br />
            </div>
    </div>

    <div name='epilepsysection' className='supportepilepsy'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Epilepsy</h2>
                    <br />
                    <p>By being kind, understanding, and prepared, you can make a big difference in helping someone with epilepsy feel more comfortable and supported. Here are some ways to offer support:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Learn About Epilepsy</span>
                    <div className="paragraph-content">Understanding what epilepsy is and what happens during a seizure will help you know how to respond and be supportive. Being informed can make a big difference.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be inclusive:</span>
                    <div className="paragraph-content">Treat the person the same as anyone else. Make sure they feel included in activities and conversations, and don’t let their epilepsy become a reason for them to feel left out.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stay Calm During a Seizure</span>
                    <div className="paragraph-content">If they have a seizure, stay calm and help keep them safe by moving any objects that could hurt them. Don’t hold them down or put anything in their mouth. Wait for help to arrive.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Patient and Understanding:</span>
                    <div className="paragraph-content">If they need extra time or a break due to medication or tiredness, be patient and understanding. Epilepsy can sometimes make daily tasks harder to manage.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stand Up Against Bullying</span>
                    <div className="paragraph-content">If anyone teases or bullies them because of their epilepsy, stand up for them. Help others understand that epilepsy is a medical condition and not something to mock or be afraid of.
                    </div></li>
                    <br />
                    <br />
            </div>
    </div>

    <div name='epilepsysection' className='sourcesepilepsy'>
            <div className="container">
                   
                    <h2>Epilepsy Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/17636-epilepsy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.epilepsy.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Epilepsy Foundation
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/epilepsy/symptoms-causes/syc-20350093" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Mayo Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.childhealthdata.org/browse/survey/results?q=10071&r=1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        National Survey of Children’s Health
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/epilepsy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Penn Medicine
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.who.int/news-room/fact-sheets/detail/epilepsy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        World Health Organization
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

export default AboutEpilepsy