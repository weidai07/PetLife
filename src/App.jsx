import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
import ConfirmationPage from './components/ConfirmationPage';
import FrontPage from './components/FrontPage';
// import CheckIn from './components/CheckIn';
//import NewCheckIn from './components/NewCheckIn';
import NewCheckInClass from './components/CheckInProp';
import NavigationBar from './components/Navigationbar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterConfirmationPage: []
    };
    this.handleConfirmationList = this.handleConfirmationList.bind(this);
  }

  handleConfirmationList(newCheckIn){
    var newMasterConfirmationPage = this.state.masterConfirmationPage.slice();
    newMasterConfirmationPage.push(newCheckIn);
    this.setState({masterConfirmationPage: newMasterConfirmationPage});
    // console.log(newMasterConfirmationPage);
  }

  render(){
    return (
    
      <div className="App">
    
        {/* <FrontPage/> */}
        {/* <NavigationBar/> */}
        <Switch>
        <Route exact path='/' component={FrontPage} />

          <Route exact path='/ConfirmationPage' render={()=><ConfirmationPage confirmationPage={this.state.masterConfirmationPage} />} />
       
          <Route path='/newcheckin' render={()=><NewCheckInClass onNewCheckInCreation={this.handleConfirmationList} />} />
      
       

        </Switch>
      </div>
    );
  }
}



export default App;

