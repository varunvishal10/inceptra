import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import band from './SM.jpg';
import './cards.css';

const SM = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"59%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Saurav Mitra
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default SM;