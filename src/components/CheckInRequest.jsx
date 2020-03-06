import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './Navigationbar';

const backgroundStyle = {
    backgroundPosition: 'center center',
    height: '100vh',
      
    display: 'inlineBlock',
    zIndex: '-1',
    width: '100%',
      
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: 'url(' + 'https://cdnfr1.img.sputniknews.com/images/103597/45/1035974598.jpg' + ')'
     
  };

function CheckInRequest(props){
  return (
    <div style={backgroundStyle}>
         <NavigationBar /> 
      <p> Would You Like to Add a Picture of Your Pet?</p>
      <button onClick={props.onCheckInRequest}>Yes</button>
    </div>
  );
}

CheckInRequest.propTypes = {
  onCheckInRequest: PropTypes.func
};

export default CheckInRequest;