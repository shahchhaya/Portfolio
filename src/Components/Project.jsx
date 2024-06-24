// Project.jsx

import React from "react";
import './Project.css';

function Project() {
    return (
        <>
            <div className="container" id="Project">
                <div className="Projects"><h1 style={{fontWeight:'bold'}}>Projects</h1></div>
                <div className="row">
                    <div className="col-sm">
                        <h3>Credit Card Validator</h3>
                        <p style={{ lineHeight: '1.6'}}>This is a simple C++ project that validates credit card numbers using the Luhn algorithm, ensuring accurate and reliable identification of valid cards.</p><br></br>
                       <a href="https://github.com/shahchhaya/creditcardvalidation" className="view-link" target ='_blank '> <button  className="view">View Source Code</button></a>
                    </div>
                    <div className="col-sm">
                        <h3>Login & Registration System</h3>
                        <p style={{ lineHeight: '1.4'}}>This is a simple C++ project implementing a secure login and registration system. This program manages user accounts.</p><br></br>
                            <a href="https://github.com/shahchhaya/login-registration" className="view-link" target ='_blank '><button className="view">View Source Code</button></a>
                    </div>
                    <div className="col-sm">
                        <h3> Portfolio Website</h3>
                        <p style={{ lineHeight: '1.6'}}>This is a Simple Portfolio website using HTML,CSS,javascipt, React js and Bootstrap frameworks .</p><br></br><br></br>
                        <a href="https://github.com/shahchhaya/Portfolio" className="view-link" target ='_blank'><button className="view">View Source Code</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
