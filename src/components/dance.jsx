import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import dance from './music.png';
import './cards.css';


const Dance = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "18rem" }}>
        
      <MDBCardBody className="zoom">

          <img src={dance} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
           Dancing
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Dance;