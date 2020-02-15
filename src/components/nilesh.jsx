import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './nilesh.jpeg';
import './cards.css';

const Nilesh = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Nilesh Kumar Pandey <br/>
            Tech Head <br/> <br/>
            <a href="https://www.facebook.com/nileshkk9" target="_blank"><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href="https://www.linkedin.com/in/nilesh-kumar-pandey/" target="_blank"><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Nilesh;