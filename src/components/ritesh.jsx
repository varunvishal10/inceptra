import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './ritesh.jpg';
import './cards.css';

const Ritesh = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"53%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Ritesh Prasad Singh <br/>
            Designing Team <br/> <br/>
            <a href="https://www.facebook.com/profile.php?id=100013461725919" target="_blank"><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href="https://www.linkedin.com/in/ritesh-prasad-singh-a4321b148/" target="_blank"><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Ritesh;