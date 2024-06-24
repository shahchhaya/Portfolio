import React from "react";
import './Skills.css';


function Skills() {
    return (
<>
<div  name="Skills" className="container">
    <h1 className="Projects"style={{fontWeight:'bold'}}>Skills</h1>
    <div className="row">
        <div className="col-sm"> <h5 >Programming Languages</h5>
            
        <div className="icon-text"><img  className="c"src="cpp.jpeg" width={40}/><p className="cpp1 ">C++</p></div> 
        <div className="icon-text"> <img src="html.png" width={25}/><p className="cpp">HTML</p></div>
        <div className="icon-text"> <img src="css.png" width={25}/><p className="cpp">CSS</p></div>
            <div className="icon-text"> <img src="js.png" width={26}/><p className="cpp">Javascript</p></div>
        </div>
        <div className="col-sm"><h5>Framework</h5>
        <div className="icon-text"><img src="React.jpg" width={30}/><p className="cpp">React </p></div> 
        <div className="icon-text"> <img src="express.png" width={25}/><p className="cpp">Express</p></div>
        <div className="icon-text"> <img src="node.png" width={25}/><p className="cpp">Node</p></div>
            <div className="icon-text"> <img src="mongo.jpeg" width={26}/><p className="cpp">Mongodb</p></div>
        </div>
        <div className="col-sm"><h5>Additional Skill</h5>
        <div className="icon-text"><img src="leader.jpeg" width={30}/><p className="cpp">Leadership</p></div> 
        <div className="icon-text"> <img src="present.jpeg" width={25}/><p className="cpp">Presentation </p></div>
        <div className="icon-text"> <img src="comm.jpeg" width={25}/><p className="cpp">Effective Communication</p></div>
            <div className="icon-text"> <img src="prob.jpeg" width={26}/><p className="cpp">Problem-solving </p></div>
        </div>
    </div>
</div>
</>
)   
}


export default Skills;
