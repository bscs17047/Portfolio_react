import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './portfolio.css'
import { FaGithub } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

const myURL = "https://github.com/bscs17047"

export default function ExpoCards() {
    return (
        <div>
            <CardGroup>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a" />
                <Card.Body>
                <Card.Title>Expo Cards</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Demo</Button>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img style={{borderRadius:'5px'}} variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a" />
                <Card.Body>
                <Card.Title>Expo Cards</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Button variant="primary">Demo</Button>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>
            <Card style={{borderRadius:'25px'}}>
                <Card.Img  style={{borderRadius:'5px'}} variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a" />
                <Card.Body>
                <Card.Title>Expo Cards</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Demo</Button>
                </Card.Body>
                <Card.Footer style={ {cursor: "pointer"}} onClick={()=>{window.open(myURL ,'_blank')}}>
      <small><FaGithub /> Source Code</small>
    </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    )
}
