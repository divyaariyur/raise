import React from 'react'
import './AboutCrohnsStyles.css'
import aboutcrohnsimg from '../../assets/aboutcrohnsimg.jpg'
import dykcrohnsimg from '../../assets/dykcrohnsimg.jpg'
import symptomscrohnsimg from '../../assets/symptomscrohnsimg.jpg'
import { Link } from 'react-scroll'
 
function AboutCrohns() {
   
    return (
        <div name='crohnssection' className='aboutcrohns'>
            <div className="container">
                <br />
                <h1>Crohn's</h1>
                    <h2>What is Crohn's?</h2>
                    <br />
                    <p>Crohn's disease is a chronic condition that causes inflammation (swelling) and can lead to ulceration (open sores) anywhere along the lining of the digestive tract, from the mouth to the anus.</p> 
                    <br />
                    <p>Crohn's disease is one of the two major types of inflammatory bowel disease (IBD), which affects the digestive system.</p>
                    <br />
                    <p>In a healthy digestive system, food moves through your stomach and intestines, and your body absorbs nutrients while eliminating waste. However, in people with Crohn's disease, the immune system mistakenly attacks the healthy cells in the digestive tract, causing inflammation. This inflammation can occur in patches, affecting some areas of the digestive system while leaving other sections untouched.
                    </p>
                    <br />
                    <p>Unlike Ulcerative Colitis, which only affects the colon and rectum, Crohn's disease can impact any part of the gastrointestinal tract. It most commonly affects the end of the small intestine (the ileum) and the beginning of the colon, but it can also involve other areas.
                    </p>
                    <br />
                    <p>Crohn's disease is a life-long condition that can cause discomfort, pain, and other complications over time. 
                    </p>
                    <div className="right">
                    <div className="promo"> 
                        <img src={aboutcrohnsimg}  text='Crohns' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='crohnssection' className='dykcrohns'>
<div className="container">
<br />
        <h2>Did you know about Crohn's?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>Crohn's is an <span style={{color: 'red', fontWeight: 'bold'}}> invisible disability.</span></li>
            <li className='li'>Adolescents and young adults between the <span style={{color: 'red', fontWeight: 'bold'}}>ages of 15 and 35 </span>are most susceptible to IBD</li>
            <li className='li'>Men and women are equally likely to be affected by Crohn's disease</li>
            <li className='li'>Studies show that between 1.5% and 28% of people with IBD have a first-degree relative (parent, child, or sibling) who also has one of these diseases
            </li>
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykcrohnsimg}  text='Crohns' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='crohnssection' className='causescrohns'>
            <div className="container">
                    <br />
                    <h2>Causes of Crohn's</h2>
                    <br />
                    <p>There is currently no known cause or cure for IBD, but fortunately, there are many effective treatments to help control it.
                    </p>
                    <br />
            </div>
    </div>

    <div name='crohnssection' className='symptomscrohns'>
            <div className="container">
            
                    <h2>Symptoms of Crohn's</h2>
                    <br />
                    <p>People with Crohn's may experience the following symptoms:</p>
                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomscrohnsimg}  text='symptomscrohns' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='crohnssection' className='challengescrohns'>
            <div className="container">
                    <br />
                    <h2>Challenges of Crohn's</h2>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Chronic Symptoms:</span>
                    <div className="paragraph-content">
                        <p>Persistent abdominal pain, diarrhea, fatigue, and weight loss can significantly impact daily life, making it difficult to maintain a normal routine.
                        </p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Nutritional Deficiencies:</span>
                    <div className="paragraph-content"> Inflammation of the GI tract can hinder the absorption of essential nutrients, leading to malnutrition, anemia, and vitamin deficiencies.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Unpredictable Flares:</span>
                    <div className="paragraph-content">The disease is marked by unpredictable periods of flare-ups, where symptoms worsen, and remission, where symptoms are minimal. This unpredictability can cause anxiety and make planning difficult.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Medication Side Effects:</span>
                    <div className="paragraph-content">Long-term use of medications, such as steroids and immunosuppressants, can lead to side effects like weight gain, osteoporosis, and increased risk of infections.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Surgical Interventions:</span>
                    <div className="paragraph-content">Some people may require surgeries to remove damaged sections of the intestine, which can lead to complications and further impact quality of life.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Mental Health Struggles: </span>
                    <div className="paragraph-content">The chronic nature of the disease, coupled with physical discomfort, can lead to depression, anxiety, and feelings of isolation.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Social and Occupational Challenges:</span>
                    <div className="paragraph-content">Managing symptoms and the need for frequent bathroom access can make it challenging to participate in social activities or maintain a regular work schedule.</div></li>                    <li><span style={{fontWeight: 'bold'}}>Dietary Restrictions:</span>
                    <div className="paragraph-content"> Many patients need to follow specific diets to manage symptoms, which can limit food choices and make social dining difficult.
                    </div></li>
                    <br />
            </div>
    </div>

    <div name='crohnssection' className='supportcrohns'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with Crohn's</h2>
                    <br />
                   
                    <li><span style={{fontWeight: 'bold'}}>Be Understanding:</span>
                    <div className="paragraph-content">Know that sometimes people may need to step out or miss school because they're not feeling well. Show patience and avoid making them feel uncomfortable.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Kind: </span>
                    <div className="paragraph-content">Not everyone's challenges are visible. Be kind and considerate, as someone who looks okay might still be in pain or feeling tired.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Inclusive:</span>
                    <div className="paragraph-content">Invite your classmate to join in activities, even if they sometimes can't participate. They might have dietary restrictions or be too tired to join certain activities, but including them makes them feel like part of the group.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Respect Their Needs: </span>
                    <div className="paragraph-content">If they need to go to the bathroom a lot, avoid making jokes or comments. It can be embarrassing for them, so just be supportive and respectful.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be a Friend:</span>
                    <div className="paragraph-content">Sometimes having a friend who understands can help a lot. Being there to listen or hang out when they're feeling up to it can make a big difference.
                    </div></li>
                    <br />
                   
            </div>
    </div>

    <div name='crohnssection' className='sourcescrohns'>
            <div className="container">
                   
                    <h2>Crohn's Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://gastro.org/clinical-guidance/guideline-toolkits/crohns-disease/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        American Gastroenterological Association
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.cdc.gov/ibd/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Centers for Disease Control and Prevention (CDC)
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/9357-crohns-disease" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.crohnscolitisfoundation.org/patientsandcaregivers/what-is-crohns-disease/overview" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Crohn's & Colitis Foundation - Crohn’s Overview
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.crohnscolitisfoundation.org/sites/default/files/legacy/assets/pdfs/IBDoverview.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Crohn's & Colitis Foundation - IBD Overview
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/crohns-disease/symptoms-causes/syc-20353304" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Mayo Clinic
                        </a>
                    </p>


                    <p>
                        <a 
                            href="https://medlineplus.gov/crohnsdisease.html" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        MedlinePlus (National Library of Medicine)
                        </a>
                    </p>


                    <p>
                        <a 
                            href="https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)
                        </a>
                    </p>


                    <p>
                        <a 
                            href="https://www.pennmedicine.org/for-patients-and-visitors/patient-information/conditions-treated-a-to-z/crohns-disease" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="crohns-sources-link"
                        >
                        Penn Medicine
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

export default AboutCrohns