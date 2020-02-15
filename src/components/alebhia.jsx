import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import band from './alebhia.jpg';
import './cards.css';

const Alebhia = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>
      
      <MDBCard style={{ width: "18rem"}}>
        
        <MDBCardBody className="zoom">
          <img src={band} style={{width:"75%",margin:"1rem"}}></img>
         <br/>
          <MDBCardText>
            Alebhia Ash <br/>
            Organising Head <br/> <br/>
            <a href="https://www.facebook.com/profile.php?id=100005735147237" target="_blank"><MDBIcon fab icon="facebook" ></MDBIcon></a> 
            <a href="https://www.linkedin.com/in/alebhia-ash-388a72178" target="_blank"><MDBIcon fab icon="linkedin" style={{marginLeft:"2rem"}}></MDBIcon></a>

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Alebhia;