import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import band from './band.png';

const Band = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "20rem" }}>
        
        <MDBCardBody>
          <img src={band} style={{width:"50%",margin:"1rem"}}></img>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Band;