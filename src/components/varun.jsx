import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './varun.jpeg';
import './cards.css';

const Varun = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"52%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Varun Vishal <br/>
            Design and Development Head <br/> <br/>
            <a href="https://www.facebook.com/varun.vishal.94" target="_blank"><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href="https://www.linkedin.com/in/varun-vishal" target="_blank"><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Varun;