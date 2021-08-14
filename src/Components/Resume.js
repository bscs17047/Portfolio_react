import React from 'react'
import './resume.css'
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function Resume() {
    return (
        <div  id='resume' style={{textAlign:'center' , backgroundColor:'#000000' , color:'black' , padding:'10px'}}>
            <h1 style={{color:'whitesmoke'}}>R E S U M E</h1>
            <div class = "resume_content" >
                <div class = 'left_content_resume' >
                    <h2>Education</h2>
                    <h4 style={{}}>Bachelor's of Computer Science</h4>
                    <h5>2017 - 2021 | C@SE Islamabad</h5>
                    <p>Main focus of the bachelor program Computer Science: 
                    Managing informatics</p>

                    <h4>Inter of Computer Science</h4>
                    <h5>2015 - 2017 | IMCB I-10/1 Islamabad</h5>
                    <p>Main focus of the master program Information Management: 
                    Managing informatics</p>
                    
                    <h4>Secondary School Certificate</h4>
                    <h5>2013 - 2015 | OPF Boys H-8/4 Islamabad</h5>
                    <p>Main focus of the master program Information Management: 
                    Managing informatics</p>
                </div>
                <div class = 'right_content_resume'>
                    <h2>Experience</h2>
                    <h4 style={{margin:'5'}}>Mobile Application Developer</h4>
                    <h4 style={{margin:'5'}}>LIVE Stick</h4>
                    <p>Feb 2020 - Apr 2020 (3 months) </p>
                    <div  style={{margin :'5'}} >
                        <List bulleted style={{textAlign:'left' ,  paddingLeft: '30',margin:'5'}}>
                            <List.Item>Build a Mobile app (APK)</List.Item>
                            <List.Item>Created new web Pages</List.Item>
                            <List.Item>Updated content of webpages</List.Item>
                            <List.Item>Added new functionalities</List.Item>
                        </List>
                    </div>
                    <h4 style={{alignitems:'flex-start' ,margin:'5'}}>Front End Developer | FYP</h4>
                    <h4 style={{margin:'5'}}>Center for Advanced Studies in Engineering (C@SE)</h4>
                    <p>Jan 2021 - Aug 2021 (8 months)</p>
                    <p>As part of my degree, I completed my final year project titled <b>Personality Prediction Using VideoProcessing</b> as a group of 4 members.</p>

                    <div  style={{margin :'5'}} >

                        <List bulleted style={{textAlign:'left' ,  paddingLeft: '30',margin:'5'}}>
                            <List.Item> <b>
                            Responsibilities</b>
                            <List.List>
                                <List.Item>Conceptualized Communication b/w Frontend & Backend</List.Item>
                                <List.Item>Created Front End using React</List.Item>
                                <List.Item>Created React Native App Frontend</List.Item>
                                <List.Item>Integrated Flask API</List.Item>
                            </List.List>
                            </List.Item>

                            <List.Item>
                            <b>Awards</b>
                            <List.List>
                                <List.Item href='https://ignite.org.pk/wp-content/uploads/2018/06/NGIRI-2020-21-List-of-Shortlisted-FYPs.pdf'>Ignite F Y P Fund</List.Item>
                            </List.List>
                            </List.Item>

                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}
