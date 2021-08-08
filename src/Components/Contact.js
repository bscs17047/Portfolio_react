import React from 'react'
import { Button} from 'react-bootstrap';

import {MdLocationOn} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import { Form } from 'react-bootstrap';

export default function Contact() {
    return (
        <div id = 'contact' style={{textAlign:'center' , backgroundColor:'#BFC9CA' , color:'black' , padding:'10px'}}>
            <h1>C O N T A C T</h1>
            <>
                <MdLocationOn/>
                <text style={{padding:'10px'}}>Islamabad </text>  
                <FaPhoneAlt/> <text style={{padding:'10px'}}> +92 332 542 92 52 </text>
            </>
            <Form style={{marginTop:'10px'}}>
                <Form.Control type="text" placeholder="Full Name" />
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Control type="text" placeholder="Subject" />
                <Form.Control as="textarea" placeholder="Type your message here" />
                <Button style={{marginTop:'10px'}} variant="outline-success">Submit</Button>
            </Form>
        </div>    
    )
}
