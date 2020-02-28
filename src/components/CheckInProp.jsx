import React from 'react';
import CheckInRequest from './CheckInRequest';
import NewCheckIn from './NewCheckIn';
import PropTypes from 'prop-types';
import NavigationBar from './Navigationbar';

class NewCheckInClass extends React.Component{
    
  constructor(props){
    super(props);
    this.state = {
        formVisibleOnPage: false
    };
    this.handleCheckInRequest = this.handleCheckInRequest.bind(this);
  }

  handleCheckInRequest(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewCheckIn onNewCheckInCreation={this.props.onNewCheckInCreation} />;
    } else {
      currentlyVisibleContent = <CheckInRequest onCheckInRequest={this.handleCheckInRequest} />;
    }
    return (
      <div>
          {/* <NavigationBar /> */}
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewCheckInClass.propTypes = {
  onNewCheckInCreation: PropTypes.func
};

export default NewCheckInClass;

