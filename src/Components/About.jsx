import React from "react";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css'
function About() {
    return (
        <>
            <div name="About"className="container" >
                <div className="About"><h1 style={{fontWeight:'bold'}}>ABOUT ME</h1></div>
                <h4 style={{ lineHeight: '1.9', fontWeight:"bold" }}>Hey Everyone </h4>
                <p style={{ lineHeight: '1.9' }}>My Name is Chhaya Kumari and i am pursuing My Bachelor in Technology From <strong>RIMT University</strong></p>
                
                    <p style={{ lineHeight: '1.9' }}>I have a strong belief in my abilities and approach challenges with a positive and determined mindset.  am always eager to improve myself. I constantly seek opportunities to learn new skills and enhance my knowledge. Whether it's through online courses, workshops, or personal projects, I am committed to continuous growth and development.</p>
                    <p style={{ lineHeight: '1.9' }}> I am excited to join a tech company where I can collaborate with experienced professionals, apply the knowledge I've gained during my studies, and contribute to innovative projects. I look forward to learning, growing, and making a meaningful impact in the tech industry.</p>

                    <div className="view-me"><p style={{fontWeight:'bold' ,textAlign:'center',fontSize:'2rem'}}> My linkedin</p></div>



                
            </div>
        </>
    )
};
export default About;
