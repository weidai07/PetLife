import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
import ConfirmationPage from './components/ConfirmationPage';
import FrontPage from './components/FrontPage';
// import Upload from './components/Upload';
//import NewUpload from './components/NewUpload';
import NewUploadClass from './components/UploadProp';
import NavigationBar from './components/Navigationbar';

class App extends React.Component {  

  constructor(props) {
    super(props);   
    this.state = {
      masterConfirmationPage: []
    };
    this.handleConfirmationList = this.handleConfirmationList.bind(this);
  }

  handleConfirmationList(newUpload){
    var newMasterConfirmationPage = this.state.masterConfirmationPage.slice();
    newMasterConfirmationPage.push(newUpload);
    this.setState({masterConfirmationPage: newMasterConfirmationPage});
  }

  render(){
    return (
    
      <div className="App">
    
        <Switch>
        <Route exact path='/' component={FrontPage} />

          <Route exact path='/ConfirmationPage' render={()=><ConfirmationPage confirmationPage={this.state.masterConfirmationPage} />} />
       
          <Route path='/newcheckin' render={()=><NewUploadClass onNewUploadCreation={this.handleConfirmationList} />} />

        </Switch>
      </div>
    );
  }
}



export default App;

