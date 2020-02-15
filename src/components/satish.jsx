import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './satish.jpg';
import './cards.css';

const Satish = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"51%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Satish Kumar Singh <br/>
            Alumni Representative <br/> <br/>
            <a href="https://www.facebook.com/profile.php?id=100003563442135" target="_blank"><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href="https://www.linkedin.com/in/srpsatish/" target="_blank"><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Satish;