import React, {Component} from 'react'
import './App.css';
import LoginPage from './Component/LoginPage'
import ShowData from './Component/ShowData'

class App extends Component {
  
render(){
   
    return (
      <div className= 'App'>
        <LoginPage />
        {/* <ShowData />
      */}
      </div>
      
    );

  }
 

}

export default App;
