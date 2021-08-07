import React from 'react'
import './footer.css'

import { FaFacebookF , FaTwitterSquare , FaLinkedinIn  , FaWhatsapp } from "react-icons/fa";
import {MdMail} from "react-icons/md";
import {VscGithubAlt} from "react-icons/vsc";
import {SiTwitter} from "react-icons/si";

export default function Footer() {
    return (
        <div style={{textAlign:'center' , backgroundColor:'black' , color:'white' }} >
            

            <h4>

            <VscGithubAlt/> <FaFacebookF/> <SiTwitter/> <FaLinkedinIn/> <MdMail/> <FaWhatsapp/>
            </h4>
            <p>© 2021 All rights reserved</p>
        </div>
    )
}
