import React, { useState } from 'react';
import Image from './Image';
import { Link } from 'react-scroll';
import { CgMenuGridO } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Home from './Home';
import '../index.css';

function Header() {
    const [menu, setMenu] = useState(false);
    const navItems=[
        {
            id:"1",
            text:"Home"
        }
        ,
        {
            id:"2",
            text:"About"
        },
        {
            id:"3",
            text:"Skills"
        },
        {
            id:"4",
            text:"Project"
        },
        {
            id:"5",
            text:"Education"
        },
        {
            id:"6",
            text:"Contact"
        }
    ]

    return (
        <>
            <div className="navbar d-md-flex px-3 ">
                <div className="navbar-brand"> <h4 style={{color:'white'}}>PORTFOLIO</h4></div>
                <div>
                               
                    <ul className="navbar-menu d-none d-md-flex ">
                    {navItems.map(({id, text}) => (
               <li key={id}><Link to={text}
               smooth={true}
               duration={500}>{text}</Link></li>
                       ))}

                        
                       
                    </ul>
                                       <div className="d-md-none  " onClick={() => setMenu(!menu)}>
                        {menu ? <RxCross2 /> : <CgMenuGridO />}
                    </div>
                </div>
            </div>
            {
                menu && (
                    <ul className="navbar-menu d-flex flex-column align-items-center d-md-none ">

{navItems.map(({id, text}) => (
               <li key={id}><Link to={text}
               smooth={true}
               duration={500}>{text}</Link></li>
                       ))}
                    </ul>
                )
            }
            <Home />
            <Image/>
        </>
    );
}

export default Header;
