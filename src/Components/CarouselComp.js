import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const myURL ='https://drive.google.com/uc?export=download&id=1fusYTHVXlwZKN1mkGZE3gY2db7TMkscq'; // link to download

export default function CarouselComp() {
    return (
        <div>
            <>
<Carousel variant="light" controls={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
      alt="laptop"
    />
    <Carousel.Caption>
    <Button variant="outline-light" onClick={()=>{window.location=myURL}}>Download Resume</Button>
        <h6>React | React Native Developer</h6>
      <h2>Abdul Rehman</h2>
      <p>Having a professional attitude towards work and capable of learning new technologies. 
      Experienced in working with Agile methodology and Scrum Methodology. Working knowledge in JS, HTML, CSS and React Native. Having strong written and verbal communication skills as well as technical skills. 
      Able to provide feedback and share the same on daily basis.</p>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
    <Button variant="outline-light" onClick={()=>{window.location=myURL}}>Download Resume</Button>
        <h6>React | React Native Developer</h6>
      <h2>Abdul Rehman</h2>
      <p>Having a professional attitude towards work and capable of learning new technologies. 
      Experienced in working with Agile methodology and Scrum Methodology. Working knowledge in JS, HTML, CSS and React Native. Having strong written and verbal communication skills as well as technical skills. 
      Able to provide feedback and share the same on daily basis.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
      alt="Third slide"
    />
    
    <Carousel.Caption>
    
    <Button variant="outline-light" onClick={()=>{window.location=myURL}}>Download Resume</Button>
        <h6>React | React Native Developer</h6>
      <h2>Abdul Rehman</h2>
      <p>Having a professional attitude towards work and capable of learning new technologies. 
      Experienced in working with Agile methodology and Scrum Methodology. Working knowledge in JS, HTML, CSS and React Native. Having strong written and verbal communication skills as well as technical skills. 
      Able to provide feedback and share the same on daily basis.</p>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </>
           
        </div>
    )
}
