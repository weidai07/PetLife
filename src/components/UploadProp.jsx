import React from 'react';
import UploadRequest from './UploadRequest';
import NewUpload from './NewUpload';
import PropTypes from 'prop-types';
import NavigationBar from './Navigationbar';

class NewUploadClass extends React.Component{
    
  constructor(props){
    super(props);
    this.state = {
        formVisibleOnPage: false
    };
    this.handleUploadRequest = this.handleUploadRequest.bind(this);
  }

  handleUploadRequest(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewUpload onNewUploadCreation={this.props.onNewUploadCreation} />;
    } else {
      currentlyVisibleContent = <UploadRequest onUploadRequest={this.handleUploadRequest} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewUploadClass.propTypes = {
  onNewUploadCreation: PropTypes.func
};

export default NewUploadClass;

