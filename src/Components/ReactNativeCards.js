import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './portfolio.css'
import { FaGithub } from "react-icons/fa";



const myURL = "https://github.com/bscs17047"

export default function ReactNativeCards() {
    return (
        <div>
            <CardGroup>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSqLPMW6IpMLJYvjqcihFwzKaQ5d-hPFddzEyTCufxYQDAfHZi3vLhivTiXxuV4kGEA4&usqp=CAU" />
                <Card.Body>
                <Card.Title>React Native Cards</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer",}} onClick={()=>{window.open(myURL ,'_blank')}}>
                <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSqLPMW6IpMLJYvjqcihFwzKaQ5d-hPFddzEyTCufxYQDAfHZi3vLhivTiXxuV4kGEA4&usqp=CAU"/>
                <Card.Body>
                <Card.Title>React Native Cards</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer"}} onClick={()=>{window.open(myURL ,'_blank')}}>
                <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img  style={{borderRadius:'5px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSqLPMW6IpMLJYvjqcihFwzKaQ5d-hPFddzEyTCufxYQDAfHZi3vLhivTiXxuV4kGEA4&usqp=CAU" />
                <Card.Body>
                <Card.Title>React Native Cards</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.             <FaGithub/>
                </Card.Text>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>

            </CardGroup>
        </div>
    )
}
