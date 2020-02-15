import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBBtnGroup,
  MDBIcon
} from "mdbreact";
import "../index.css";
import AnimationPage from './Animation';
import './scrollbar.css';
import Events from './events';
import LightboxPage from './gallery';
import Brochure from './brochure';
import Testimonials from './testimonials';
import Contact from './contact';
import Footer from './footer';
import Particles from 'react-particles-js';
import Sponsers from './sponsers';
import bulb from './bulb.png';
import Faculty from './faculty';
import Team from './team';
import './countdown';



class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
            style={{opacity:"0.8"}}
              color="black"
              
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
     
                <MDBNavbarBrand>
                  <strong className="white-text">Inceptra'20</strong>
                </MDBNavbarBrand>
               
              </MDBContainer>
            </MDBNavbar>
        
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div align="center">
              <MDBRow id="home">
                <MDBCol md="3"></MDBCol>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".4s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5" style={{fontSize:"2.5rem"}}>
                     INCEPTRA  <small className="blinking" style={{color:"white",fontSize:"1.2rem",padding:"1rem"}}>X Recursion</small>
                    </h1>
                    
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                    4 years was a long wait, but everything in life is worth a wait. But making your wait worthy, "RECURSION" (the official alumni association of Department of IT headed by Dr. Chandan Banerjee plans to end it by presenting to you the Grand Reunion of the department IT The "INCEPTRA 2020".  
It's an official attempt by the department for unifying the students along with some great cultural programs, performances and words of guidance. <br/><br/>
 
 <MDBRow>
   <MDBCol md="3"><p id="demo1">In :</p></MDBCol>
   <MDBCol md="9"><p id="demo"></p></MDBCol>
 </MDBRow>
                    </h6>
                    <div>
                    <a href="https://forms.gle/osNYCA8TmaAFZ7bW9" target="_blank">
                    <MDBBtn color="white" style={{color :"black"} }>Register Yourself</MDBBtn>
                  </a>
                    <MDBBtn outline color="white">
                      Brochure
                    </MDBBtn>
                   
                    </div>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
            
              </MDBRow>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      <br/>
      <br/>
  <div id="cards">
      <Events/>
      </div>
      <LightboxPage/>
    
      <br/><br/>
      <Brochure/>
      <br/><br/>
      <Testimonials />
      <br/><br/>
      <Contact />
      <br/><br/>
      <Faculty/>
      <br/><br/>
     <Team/>
     
      <br/><br/>
      <Sponsers/>
      <br/><br/>
      <Footer />
      
      </div>
    );
  }
}

export default AppPage;