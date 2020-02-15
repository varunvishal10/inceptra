import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './vishwajeet.jpg';
import './cards.css';

const Vish = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"40%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Vishwajeet Raj<br/>
            Designing Team <br/> <br/>
            <a href=""><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href=""><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Vish;