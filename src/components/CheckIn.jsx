import React from 'react';
import PropTypes from 'prop-types';

function CheckIn(props){
  return (
    <div>
      <h3>{props.where}</h3>
      <h3>{props.checkIn} - {props.checkOut}</h3>
      <h3>{props.guests}</h3>
      <hr/>
    </div>
  );
}

CheckIn.propTypes = {
  where: PropTypes.string.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  guests: PropTypes.string
};

export default CheckIn;