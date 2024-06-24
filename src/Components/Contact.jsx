import React from 'react';
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdHeart } from "react-icons/io"


const Contact = () => {
  return (
    <>
    <div className='container'>
      <h1 className='About'   style={{fontWeight:'bold'}}>Connect by me</h1>
      <div className='socials'>
        <ul className='contact'>
          <li><a href='https://www.linkedin.com/in/chhaya-kumari-35bb0a24b/' target='_blank'><FaLinkedin  style={{color:'blue'}}size={34} /></a></li>
          <li><a href='https://mail.google.com/mail/u/0/?hl=en/#sent?compose=GTvVlcSDbSJXrgCKMQQLPZLRKvLJcdhvDhKDcLlRMTLpQcjfbZpWdWClQghmNcBhWxjZlHmnxgVrM' target='__blank'><img src='mail.jpeg'width={50}></img></a></li>
          <li ><a href='https://www.instagram.com/chhaya_shah.22/ ' target='__blank'><img className='.img' width={60} src='instagram.jpeg'></img>
        </a></li>
        </ul>
      </div>
      <div className=''>
        <h6> &copy; Made with <IoMdHeart style={{color:'red'}}/> By Chhaya</h6>
      </div>
    </div>
    
    </>
  );
};

export default Contact;

