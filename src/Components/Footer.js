import React from 'react'
import './footer.css'

import { FaFacebookSquare , FaTwitterSquare , FaLinkedin , FaGithubSquare } from "react-icons/fa";
import {MdMail} from "react-icons/md";

export default function Footer() {
    return (
        <div style={{textAlign:'center' , backgroundColor:'black' , color:'white' }} >
            <FaGithubSquare/> <FaFacebookSquare/> <FaTwitterSquare/> <FaLinkedin/> <MdMail/>
            <p>© 2021 All rights reserved.</p>
        </div>
    )
}
