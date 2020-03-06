import React from 'react';
import { Link } from 'react-router-dom';

const logo = {

  position: 'absolute',
  top: '0',
  left: '0',
  width: '100px',
  paddingTop: '80px'
   
};
   
const mainNav = {
     
     
  position: 'initial',
  textDecoration: 'none',
  listStyleType: 'none',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  paddingBottom: '0px'
   
};
   
const link = {  
  padding: '5px',
  paddingTop: '0px',
  paddingBottom: '0px',
  textDecoration: 'none',
  position:'static',
  margin: '0',
  float: 'right',
   
  color: 'white'
};

function NavigationBar(){
  return (
    <div>
     
      <ul style={mainNav} >
        <li><a style={link} >Login</a></li>
        <li><a style={link} >Sign Up</a></li>
        <li><a style={link} >Help</a></li>
        <li><a style={link} >Post an Image</a></li>
        <li><a style={link} >Leave a Comment</a></li>
        <li><a style={link}>Select Language</a></li>
        <Link to="/">Home</Link> | <Link to="/ConfirmationPage">Pictures</Link> | <Link to="/NewCheckIn">Find a Pet</Link>
      </ul>
    </div> 
  );    
}

export default NavigationBar;