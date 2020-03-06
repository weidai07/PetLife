import React from 'react';
import Upload from './Upload';
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
    backgroundImage: 'url(' + 'https://cdnfr1.img.sputniknews.com/images/103597/45/1035974598.jpg'
     
  }; 

  
function ConfirmationPage(props){
  return(
    <div style={backgroundStyle}>
        <NavigationBar />
      <p> Here are the Pictures</p>
      {props.confirmationPage.map((upload) => 
        <Upload where={upload.where}
          upload={upload.upload}
          download={upload.download}
          users={upload.users} 
          key={upload.id}/>
      )}
    </div>
  );    
}

ConfirmationPage.propTypes = {
  confirmationPage: PropTypes.array
};

export default ConfirmationPage;
