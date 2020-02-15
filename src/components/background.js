import React, { Component } from "react";
import Particles from 'react-particles-js';
import logo from './img2.jpg'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import FullPageIntroWithNonFixedNavbar from './navabar';



class Bg extends Component {
  render() {
    return (
		
		<div>
			<FullPageIntroWithNonFixedNavbar/>
			
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 8,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} 
        style={{
            position : "absolute" ,
     background : "black"
  }} />

  

  </div>
    
    );
  }
}

export default Bg;

