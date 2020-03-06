import React from 'react';
import PropTypes from 'prop-types';

function Upload(props){
  return (
    <div>
      <h3>{props.where}</h3>
      <h3>{props.upload} - {props.download}</h3>
      <h3>{props.users}</h3>
      <hr/>
    </div>
  );
}

Upload.propTypes = {
  where: PropTypes.string.isRequired,
  upload: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
  users: PropTypes.string
};

export default Upload;