import React from 'react'
import './footer.css'

import { FaFacebookF  , FaLinkedinIn   } from "react-icons/fa";
import {MdMail} from "react-icons/md";
import {VscGithubAlt} from "react-icons/vsc";
import {SiTwitter} from "react-icons/si";

const GithubURL = 'https://github.com/bscs17047'
const FacebookURL = 'https://www.facebook.com/khawaja008'
const TwitterURL = 'https://twitter.com/arehman08'
const LinkedInURL = 'https://www.linkedin.com/in/abdulrehmankhawaja/'
const EmailURL = 'mailto:a_rehman97@outlook.com'



export default function Footer() {
    
    return (
        <div style={{textAlign:'center' , backgroundColor:'black' , color:'white' }} >
            

            <h4>
            
            <VscGithubAlt onClick={()=>{window.location=GithubURL}}/> 

            <FaFacebookF onClick={()=>{window.location=FacebookURL}}/> 

            <SiTwitter onClick={()=>{window.location=TwitterURL}}/> 

            <FaLinkedinIn onClick={()=>{window.location=LinkedInURL}}/> 

            <MdMail onClick={()=>{window.location=EmailURL}}/> 

            </h4>
            <p>© 2021 All rights reserved</p>
        </div>
    )
}
