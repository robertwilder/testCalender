import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DayNav from './components/DayNav';
import Nine from './components/TimeComponents/Nine';
import NineThirty from './components/TimeComponents/NineThirty'

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <div>
        <h1>Hello</h1>
        <DayNav/>
        <Switch>
              <Route exact path="/" render={()=> <Nine title="Nine" addPages={this.addPages} pages={this.state.pages}/>}/>
              {/* <Route path='/Ten'com */}
              <Route path="/Nine"TimeComponents={Nine}/>
              {/* <Route path=""component={Blog}/> */}
          </Switch>
          
      </div>
      </BrowserRouter>
    )
  }

}
export default App;
