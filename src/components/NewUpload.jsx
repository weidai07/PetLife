import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import NavigationBar from './Navigationbar';

const moveCard = {
  paddingLeft:'300px'
};

const useStyles = makeStyles({
  root: {
    minWidth: 365,
    width: '170px',
    marginTop: 100,
    height: '600px',
     

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
      
      


  },
  title: {
    fontSize: 14,
      
     
      
  },
  pos: {
    marginBottom: 1,
      
  },
});

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

function NewUpload(props){
  let _where = null;
  let _upload = null;
  let _download = null;
  let _users = null;

  function handleNewUpload(event) {
      console.log(props.handleNewUpload);
    event.preventDefault();
    props.onNewUploadCreation({where: _where.value, upload: _upload.value, download: _download.value, users: _users.value, id: v4()});
    _where.value = '';
    _upload.value= '';
    _download.value= '';
    _users.value= '';
  }

  const classes = useStyles();

  return (
    <div style={backgroundStyle}>
        <div style={moveCard}>
        <NavigationBar /> 
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <form onSubmit={handleNewUpload}>
                <h3>Upload Images of Your Pets.</h3>
                <input type='text' id='where' placeholder='Where to check in' ref={(input) => {_where = input;}}/>
       
                <br/><br/>
                <h5>Upload Image</h5>
                <input type='text' id='upload' placeholder='upload to check in' ref={(input) => {_upload = input;}}/>

                <br/>
                <h5>Download Image</h5>
                <input type='text' id='download' placeholder='download to check in' ref={(input) => {_download = input;}}/>

                <br/>
                <h5>Users</h5>
                <input type='text' id='users' placeholder='users to check in' ref={(input) => {_users = input;}}/>
              
                <button type='submit'>Submit</button>
            </form> 
            </CardContent>
            <CardActions>

            </CardActions> 
        </Card>
        </div>
    </div>
  );
}

NewUpload.propTypes = {
  onNewUploadCreation: PropTypes.func
};

export default NewUpload;
