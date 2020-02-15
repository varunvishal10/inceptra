import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import team from './team.png';
import './cards.css';


const AlumniTeam = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "18rem" }}>
        
      <MDBCardBody className="zoom">

          <img src={team} style={{width:"50%",margin:"1rem"}}></img>
          <br/>
          <MDBCardText>
           Alumni Meetup
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default AlumniTeam;