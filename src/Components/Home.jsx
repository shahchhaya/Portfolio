import React from "react";
import  "../Textanimation.css"
import { useTypewriter } from 'react-simple-typewriter';


const Home = () => {
    const [ text]= useTypewriter({
      words: ['Programmer', 'Developer', 'Designer' ,'Quick Learner'],
      loop: 0, // Infinite loop
      typeSpeed: 80, // Speed of typing
      deleteSpeed: 30, // Speed of deleting
      delaySpeed: 1000 // Delay before starting next word
    });
    return(
      <>
      
      <h1 className="animation">{text} | </h1>
    
        
       </>
    )
}


export default Home;