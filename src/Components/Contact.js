import React from 'react'
import { Button} from 'react-bootstrap';
import './contact.css'
import emailjs from 'emailjs-com';

import {MdLocationOn} from "react-icons/md";
import {MdMail} from "react-icons/md";
import { Form } from 'react-bootstrap';

const EmailURL = 'mailto:a_rehman97@outlook.com'

const lat = '33.647430060949944' 
const lng =  '73.04023307863737'

const service_ID= 'service_d0x1m9w'
const template_ID = 'template_7s2nasa'
const user_ID = "user_BNNzulBQX39CSTzZ7wP0T"

const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+lat+","+lng );
  };

export default function Contact() {
    return (
        <div id = 'contact' style={{textAlign:'center' , backgroundColor:'#BFC9CA' , color:'black' , padding:'10px'}}>
            <h1>C O N T A C T</h1>
           
                <div class ='content'>
                    <div class = 'content_right'>
                        <MdLocationOn class ='icon_clr' onClick={showInMapClicked}/>
                        <text style={{padding:'10px'}}>Islamabad </text>  
                        
                        <MdMail class ='icon_clr' onClick={()=>{window.location=EmailURL}}/> 
                        <text style={{padding:'10px'}}>a_rehman97@outlook.com </text>
                    </div>

                    <div class = 'content_left'>
                        <Form onSubmit={sendEmail} id="contact-form" style={{marginTop:'10px'}} >
                            <Form.Control name='name' type="text" placeholder="Full Name" />
                            <Form.Control name='email' type="email" placeholder="Enter Email" />
                            <Form.Control name='subject' type="text" placeholder="Subject" />
                            <Form.Control name='message' as="textarea" placeholder="Type your message here" />
                            <Button type = 'submit' value='Send' style={{marginTop:'10px'}} variant="primary" >Submit</Button>
                        </Form>
                    </div>
                </div>
        </div>
    )
}

function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(service_ID , template_ID,e.target , user_ID
        ).then(res=>{
            console.log("Response" + res)
        }).catch(err=> console.log("error" + err))
}