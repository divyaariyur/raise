import React from 'react'
import './Aboutt1dStyles.css'
import aboutt1dimg from '../../assets/aboutt1dimg.jpg'
import dykt1dimg from '../../assets/dykt1dimg.jpg'
import t1dsymptomsimg from '../../assets/t1dsymptomsimg.jpg'
import { Link } from 'react-scroll'
 
function AboutT1D() {
    return (
        <div name='t1dsection' className='aboutt1d'>
            <div className="container">
            
                <h1>Type 1 Diabetes</h1>
                    <h2>What is Type 1 Diabetes?</h2>
                    <br />
                    <p>Type 1 diabetes is a chronic autoimmune disease where the pancreas produces little to no insulin. Insulin is a hormone needed for blood sugar to enter the cells in the body and provide energy. Without insulin, the blood sugar builds up in the bloodstream, leading to high blood glucose and potential complications.</p> 
                    <br />
                    <p>Currently, type 1 diabetes has no cure. Treatment is directed toward managing the amount of sugar in the blood using insulin, diet and lifestyle to prevent complications.
                    </p>
                    <br />
                    <div className="right">
                    <div className="promo">
                       
                        <img src={aboutt1dimg}  text='T1D' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='ucsection' className='dykuc'>
<div className="container">
<br />
        <h2>Did you know about Type 1 Diabetes?</h2>
        <ul classname="ul">
        <br/ >
        <li className='li'>Type 1 Diabetes is an <span style={{color: 'red', fontWeight: 'bold'}}>invisible disability.</span></li>
            <li className='li'>Anyone at any age can develop Type 1 diabetes (T1D), though the most common age at diagnosis is between <span style={{color: 'red', fontWeight: 'bold'}}>the ages of 4 to 6 </span>and in early puberty <span style={{color: 'red', fontWeight: 'bold'}}>(10 to 14 years).</span></li> 
            <li className='li'>In the United States, approximately <span style={{color: 'red', fontWeight: 'bold'}}>1.24 million people </span>live with Type 1 diabetes, and that number is expected to grow to five million by 2050.</li> 
            <li className='li'>Type 1 diabetes is <span style={{color: 'red', fontWeight: 'bold'}}>one of the most common chronic diseases that affect children </span>in the United States, though adults can be diagnosed with the disease as well.</li>
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykt1dimg}  text='T1D' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='t1dsection' className='causest1d'>
            <div className="container">
                    <br />
                    <h2>Causes of Type 1 Diabetes</h2>
                    <br />
                    <p>Type 1 diabetes is believed to result from an autoimmune reaction, where the body mistakenly attacks itself. This reaction specifically targets and destroys the insulin-producing beta cells in the pancreas. The destruction process can persist for months or even years before any noticeable symptoms emerge.</p>
                    <br />
                    <p>While the exact cause of Type 1 diabetes remains unknown, scientists have identified a strong genetic component. However, genetics alone do not fully explain the development of the condition. Researchers believe that certain environmental factors, such as viral infections or exposure to toxins, may trigger the immune system to attack pancreatic cells in individuals with a genetic predisposition to Type 1 diabetes.
                    </p>
                    <br />
            </div>
    </div>

    <div name='t1dsection' className='symptomst1d'>
            <div className="container">
            
                    <h2>Symptoms of Type 1 Diabetes</h2>
                    <br />
                    <p>The most common symptoms of Type 1 Diabetes are:</p>
                    <div className="right">
                        <div className="promo">
                        
                            <img src={t1dsymptomsimg}  text='SymptomsT1D' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='t1dsection' className='challengest1d'>
            <div className="container">
                    <br />
                    <h2>Challenges of Type 1 Diabetes</h2>
                    <br />
                    <p>People with Type 1 diabetes face a variety of challenges in managing their condition, both physically and emotionally. Some of the most common challenges include:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Blood Sugar Monitoring: </span>
                    <div className="paragraph-content">
                        <p>People with Type 1 diabetes must constantly monitor their blood sugar levels to avoid hyperglycemia (high blood sugar) or hypoglycemia (low blood sugar). This requires frequent finger-prick tests or the use of continuous glucose monitors (CGMs), which can be uncomfortable and time-consuming.</p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Insulin Management: </span>
                    <div className="paragraph-content">Since the body cannot produce insulin, people with Type 1 diabetes need to administer insulin multiple times a day, either through injections or an insulin pump.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Diet and Meal Planning: </span>
                    <div className="paragraph-content">People with Type 1 diabetes need to carefully plan meals, track carbohydrate intake, and adjust insulin doses accordingly. Even small changes in diet can affect blood sugar, making it challenging to eat spontaneously or enjoy meals without calculation.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Risk of Hypoglycemia: </span>
                    <div className="paragraph-content">Low blood sugar (hypoglycemia) can occur unexpectedly, especially during exercise or if too much insulin is taken. Symptoms include dizziness, confusion, sweating, and in severe cases, unconsciousness. Managing hypoglycemia often requires immediate action, like consuming sugary foods or drinks.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Emotional and Mental Strain: </span>
                    <div className="paragraph-content">The daily demands of managing diabetes can lead to stress, anxiety, and even burnout. Some may experience "diabetes distress," a term for the emotional toll that comes with managing the disease. There's also the fear of long-term complications, such as heart disease, kidney failure, and nerve damage.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Social Challenges: </span>
                    <div className="paragraph-content">People with Type 1 diabetes may feel isolated or misunderstood, especially in social situations where they have to explain their condition or make special accommodations. They may also encounter misconceptions about diabetes, which can lead to stigma or judgment.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Stigma and Misunderstanding: </span>
                    <div className="paragraph-content">Type 1 Diabetes is an invisible illness, and others may not understand the severity of the condition.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Long-term Health Complications: </span>
                    <div className="paragraph-content">Even with careful management, Type 1 diabetes can increase the risk of long-term complications, including cardiovascular disease, kidney disease, nerve damage, vision problems (like diabetic retinopathy), and more. This adds additional anxiety and pressure to maintain tight control over blood sugar levels.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Impact on Daily Life: </span>
                    <div className="paragraph-content">Type 1 diabetes can affect day-to-day activities, from exercising to traveling. It requires planning and preparation, such as carrying insulin, snacks, and supplies, which can make spontaneous activities more difficult.</div></li>
                    
                    <br />
            </div>
    </div>

    <div name='t1dsection' className='supportt1d'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Type 1 Diabetes</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Educate yourself:</span>
                    <div className="paragraph-content">Learn about Type 1 Diabetes and its symptoms.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be understanding:</span>
                    <div className="paragraph-content">Understand that managing diabetes can be stressful, and a person with type 1 diabetes may need time to check blood sugar or eat.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be supportive:  </span>
                    <div className="paragraph-content">Respect the eating habits and medical routines of individuals with type 1 diabetes.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be inclusive:</span>
                    <div className="paragraph-content">Make sure individuals with type 1 diabetes feel included in school activities and social events.</div></li>
                    <br />
                    <br />
            </div>
    </div>

    <div name='t1dsection' className='sourcest1d'>
            <div className="container">
                   
                    <h2>Type 1 Diabetes Sources</h2>
                    <br />
                    
                    <p>
                        <a 
                            href="https://diabetes.org/about-diabetes/type-1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        American Diabetes Association
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.cdc.gov/diabetes/about/about-type-1-diabetes.html" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Centers for Disease Control and Prevention
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/21500-type-1-diabetes" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/symptoms-causes/syc-20353011" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="epilepsy-sources-link"
                        >
                        Mayo Clinic
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

export default AboutT1D