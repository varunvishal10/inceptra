import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import band from './subham.jpg';
import './cards.css';

const Subham = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"38%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Subham Kumar Shaw<br/>
            PR Head <br/> <br/>
            <a href=""><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href=""><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Subham;