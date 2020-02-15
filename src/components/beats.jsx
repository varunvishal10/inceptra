import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import beats from './bot.png';
import './cards.css';


const Beats = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "18rem" }}>
        
      <MDBCardBody className="zoom">

          <img src={beats} style={{width:"50%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
           Beatboxing
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Beats;