import React from 'react'
import './AboutADHDStyles.css'
import aboutadhdimg from '../../assets/aboutadhdimg.jpg'
import dykadhdimg from '../../assets/dykadhdimg.jpg'
import symptomsadhdimg from '../../assets/symptomsadhdimg.jpg'
import { Link } from 'react-scroll'
 
function AboutADHD() {
   
    return (
        <div name='adhdsection' className='aboutadhd'>
            <div className="container">
                <br />
                <h1>Attention-Deficit/Hyperactivity Disorder (ADHD)</h1>
                <br />
                    <h2>What is ADHD?</h2>
                    <br />
                    <p>ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsive behaviour (acting without thinking what the result will be) that interfere with functioning or development.</p> 
                    <br />
                    <p>ADHD is usually diagnosed in childhood and often continues into adolescence and adulthood. The condition affects the brain's executive functions, which include attention control, inhibition, and working memory.</p>
                    <br />
                    <p>ADHD is often considered an "invisible" disorder, as its symptoms are behavioral and cognitive rather than physical.</p>
                    <br />
                    
                    <div className="right">
                    <div className="promo"> 
                        <img src={aboutadhdimg}  text='ADHD' style={{width: '100%', height: 'auto'}}/> 
                    </div>
                </div>
            </div>
      
<div name='adhdsection' className='dykadhd'>
<div className="container">
<br />
        <h2>Did you know about ADHD?</h2>
        <ul classname="ul">
        <br/ >
            <li className='li'>ADHD is an <span style={{color: 'red', fontWeight: 'bold'}}> invisible disability.</span></li>
            <li className='li'>Boys <span style={{color: 'red', fontWeight: 'bold'}}>(15%) </span>were more likely to be diagnosed with ADHD than girls <span style={{color: 'red', fontWeight: 'bold'}}>(8%)</span></li>
            <li className='li'>ADHD often co-occurs with other conditions such as learning disabilities, anxiety, or depression.</li>
            <li className='li'>About <span style={{color: 'red', fontWeight: 'bold'}}>4 in 10 </span>of the children with ADHD had anxiety.</li>
            <li className='li'>ADHD symptoms can vary in severity. About 6 in 10 children had moderate or severe ADHD</li>
            <li className='li'>An estimated <span style={{color: 'red', fontWeight: 'bold'}}>265,000 </span>U.S. children <span style={{color: 'red', fontWeight: 'bold'}}>ages 3 to 5 years </span>have been diagnosed with ADHD.</li>
            <li className='li'>An estimated <span style={{color: 'red', fontWeight: 'bold'}}>2.4 million </span>U.S. children <span style={{color: 'red', fontWeight: 'bold'}}>ages 6 to 11 years </span>have been diagnosed with ADHD.</li>
            <li className='li'>An estimated <span style={{color: 'red', fontWeight: 'bold'}}>3.3 million </span>U.S. children <span style={{color: 'red', fontWeight: 'bold'}}>ages 12 to 17 years </span>have been diagnosed with ADHD.</li>
            
        </ul>
   
        <div className="right">
            <div className="container">
                <div className="promo">
                    <img src={dykadhdimg}  text='ADHD' style={{width: '60%', height: 'auto'}}/>   
                </div>
            </div>
                
        </div>
        
    <div name='adhdsection' className='causesadhd'>
            <div className="container">
                    <br />
                    <h2>Causes of ADHD</h2>
                    <br />
                    <p>The exact cause of ADHD is unknown, but research suggests possible contributing factors as:
                    <li>Genetics</li>
                    <li>Environmental factors</li>
                    </p>
                    <br />
            </div>
    </div>

    <div name='adhdsection' className='symptomsadhd'>
            <div className="container">
            
                    <h2>Symptoms of ADHD</h2>
                    <br />
                    <p>ADHD symptoms typically begin before the age of 12, with some children showing signs as early as age 3. These symptoms can range from mild to severe and may continue into adulthood.</p>
                    <br />
                    <p>Common symptoms of ADHD include:</p>

                    <div className="right">
                        <div className="promo">
                        
                            <img src={symptomsadhdimg}  text='symptomsadhd' style={{width: '80%', height: 'auto'}}/>
                        </div>
                    </div>
            </div>
    </div>
      
    <div name='adhdsection' className='challengesadhd'>
            <div className="container">
                    <br />
                    <h2>Challenges of ADHD</h2>
                    <br />
                    <p>Individuals with ADHD (Attention-Deficit/Hyperactivity Disorder) often face a variety of challenges, both in their daily lives and over the long term. Some common challenges include:
                    </p>
                    <br />
                    <li><span style={{fontWeight: 'bold'}}>Difficulty with Focus and Concentration:</span>
                    <div className="paragraph-content">
                        <p>Struggling to focus in class, complete assignments, or study effectively.
                        </p>
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Time Management and Organization:</span>
                    <div className="paragraph-content">Difficulty prioritizing tasks and managing time efficiently.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Hyperactivity:</span>
                    <div className="paragraph-content">Feeling restless or unable to sit still, which can be particularly challenging in structured settings like classrooms.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Emotional Stress:</span>
                    <div className="paragraph-content">Difficulty managing emotions, leading to frustration, mood swings or outbursts.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Academic Challenges:</span>
                    <div className="paragraph-content">Trouble with completing homework or focusing in class, leading to poor academic performance.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Sleep Problems: </span>
                    <div className="paragraph-content">Difficulty falling asleep or maintaining a regular sleep schedule due to an overactive mind or restlessness.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Co-occurring Conditions:</span>
                    <div className="paragraph-content">ADHD often coexists with other mental health conditions like anxiety, depression, or learning disabilities.</div></li>                    
                    
                    <br />
            </div>
    </div>

    <div name='adhdsection' className='supportadhd'>
            <div className="container">
                    <br />
                    <h2>How can you support someone with ADHD</h2>
                    <br />
                   
                    <li><span style={{fontWeight: 'bold'}}>Educate Yourself:</span>
                    <div className="paragraph-content">Learn about ADHD to better understand their experience and offer more meaningful support.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be Patient: </span>
                    <div className="paragraph-content">Understand that certain tasks may take longer or require more effort.
                    </div></li>
                    <li><span style={{fontWeight: 'bold'}}>Respect their needs:</span>
                    <div className="paragraph-content">Be understanding if extra time or alternative approaches are needed to complete tasks, and support any necessary accommodations.</div></li>
                    <li><span style={{fontWeight: 'bold'}}>Be a Good Listener:</span>
                    <div className="paragraph-content">Offer support without judgment.</div></li>
                    <br />
                   
            </div>
    </div>

    <div name='adhdsection' className='sourcesadhd'>
            <div className="container">
                   
                    <h2>ADHD Sources</h2>
                    <br />
                    <p>
                        <a 
                            href="https://add.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Attention Deficit Disorder Association (ADDA)
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.psychiatry.org/patients-families/adhd" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        American Psychiatric Association
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://www.cdc.gov/ncbddd/adhd/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Centers for Disease Control and Prevention (CDC)
                        </a>
                    </p>

                    <p>
                        <a 
                            href="https://chadd.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder)
                        </a>
                    </p>


                    <p>
                        <a 
                            href="https://my.clevelandclinic.org/health/diseases/4784-attention-deficithyperactivity-disorder-adhd#overview" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Cleveland Clinic
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        Mayo Clinic 
                        </a>
                    </p>
                    
                    <p>
                        <a 
                            href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="adhd-sources-link"
                        >
                        National Institute of Mental Health (NIMH) 
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

export default AboutADHD