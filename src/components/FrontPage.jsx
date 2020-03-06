import React from 'react';
import NavigationBar from './NavigationBar';



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


function FrontPage(){
  return (
    <div style={backgroundStyle}>
      <NavigationBar />   
    </div>
  );    
}

export default FrontPage;