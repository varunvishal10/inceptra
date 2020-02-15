import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import sing from './singer.png';
import './cards.css';


const Singer = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "18rem" }}>
        
      <MDBCardBody className="zoom">

          <img src={sing} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Singing
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Singer;