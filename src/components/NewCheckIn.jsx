//This will be the page that creates new CheckIns

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
    // paddingTop: '15%',
      
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: 'url(' + 'https://cdnfr1.img.sputniknews.com/images/103597/45/1035974598.jpg' + ')'
     
  };

function NewCheckIn(props){
  let _where = null;
  let _checkIn = null;
  let _checkOut = null;
  let _guests = null;

  function handleNewCheckIn(event) {
      console.log(props.handleNewCheckIn);
    event.preventDefault();
    props.onNewCheckInCreation({where: _where.value, checkIn: _checkIn.value, checkOut: _checkOut.value, guests: _guests.value, id: v4()});
    _where.value = '';
    _checkIn.value= '';
    _checkOut.value= '';
    _guests.value= '';
  }



  // export default function CheckIn() {
  const classes = useStyles();

  return (
    <div style={backgroundStyle}>
        <div style={moveCard}>
        <NavigationBar /> 
        <Card className={classes.root} variant="outlined">
            <CardContent>
            <form onSubmit={handleNewCheckIn}>
                <h3>Book unique places to stay and things to do.</h3>
                <input type='text' id='where' placeholder='Where to check in' ref={(input) => {_where = input;}}/>
                {/* <TextField id="filled-basic" label="Where" variant="filled" ref={(input) => {_where = input;}} /> */}
                <br/><br/>
                <h5>Check-In</h5>
                <input type='text' id='checkIn' placeholder='checkIn to check in' ref={(input) => {_checkIn = input;}}/>
                {/* <TextField id="filled-basic" label="mm/dd/yyyy" variant="filled" ref={(input) => {_checkIn = input;}}/> */}
                <br/>
                <h5>Check-out</h5>
                <input type='text' id='checkOut' placeholder='checkOut to check in' ref={(input) => {_checkOut = input;}}/>
                {/* <TextField id="filled-basic" label="mm/dd/yyyy" variant="filled" ref={(input) => {_checkOut = input;}} /> */}
                <br/>
                <h5>Guests</h5>
                <input type='text' id='guests' placeholder='guests to check in' ref={(input) => {_guests = input;}}/>
                {/* <TextField id="outlined-basic" label="Guests" variant="filled"ref={(input) => {_guests = input;}}/> */}
                <button type='submit'>Submit</button>
            </form> 
            </CardContent>
            <CardActions>
            {/* <Button   variant="contained" size="medium" color="secondary">Submit</Button> */}
            </CardActions> 
        </Card>
        </div>
    </div>
  );
}

NewCheckIn.propTypes = {
  onNewCheckInCreation: PropTypes.func
};

export default NewCheckIn;

//this creates new checkins, maybe move to a NewCheckIn component and have this more like ticket.