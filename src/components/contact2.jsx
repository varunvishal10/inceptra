import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import team from './team.png';
import './cards.css';


const Contact2 = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "17rem" , background:"black"}}>
        
      <MDBCardBody>
    <h4 style={{color:"white"}}>Abhishek Kumar</h4>
        
          <MDBCardText style={{color:"lightgray"}}>
           Email ID : abhisheksingh211297@gmail.com<br/>
           Phone Number : +919523341866

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Contact2;