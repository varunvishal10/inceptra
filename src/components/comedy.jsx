import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import comedy from './stage.png';
import './cards.css';


const Comedy = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "18rem" }}>
        
      <MDBCardBody className="zoom">

          <img src={comedy} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
           Standup Comedy
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Comedy;