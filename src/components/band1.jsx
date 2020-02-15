import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import band from './band.png';
import './cards.css';

const Band = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText style={{color:"whitesmoke"}}>
            Guest Performance
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Band;