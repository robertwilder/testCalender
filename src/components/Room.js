import React from 'react';
import DayNav from './DayNav';
import Nine from './TimeComponents/Nine';
// import NineThirty from './components/TimeComponents/NineThirty'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NineThirty from './TimeComponents/NineThirty';
import Ten from './TimeComponents/Ten';
import TenThirty from './TimeComponents/TenThirty';
import Eleven from './TimeComponents/Eleven';
import ElevenThirty from './TimeComponents/ElevenThirty';
import Twelve from './TimeComponents/Twelve';
import TwelveThirty from './TimeComponents/TwelveThirty'
import One from './TimeComponents/One'
import OneThirty from './TimeComponents/OneThirty'
import Two from './TimeComponents/Two'
import TwoThirty from './TimeComponents/TwoThirty'
import Three from './TimeComponents/Three'
import ThreeThirty from './TimeComponents/ThreeThirty'
import Four from './TimeComponents/Four'
import FourThirty from './TimeComponents/FourThirty'
import Five from './TimeComponents/Five'
import './styleComponents/Room.css'

class Room extends React.Component{
  render() {
    return(
      <BrowserRouter>
      <div>
        
        <h2>Facilities:</h2>
        
        <DayNav/>
        <Switch>
            
              <Route exact path="/" render={()=> <Nine title="Nine"/>}/>
              {/* <Route path='/Ten'com */}
              <Route path="/Nine">
                <Nine/>
              </Route>
              <Route path="/NineThirty">
                <NineThirty/>
              </Route>
              <Route path="/Ten">
                <Ten/>
              </Route>
              <Route path="/TenThirty">
                <TenThirty/>
              </Route>
              <Route path="/Eleven">
                <Eleven/>
              </Route>
              <Route path="/ElevenThirty">
                <ElevenThirty/>
              </Route>
              <Route path="/Twelve">
                <Twelve/>
              </Route>
              <Route path="/TwelveThirty">
                <TwelveThirty/>
              </Route>
              <Route path="/One">
                <One/>
              </Route>
              <Route path="/OneThirty">
                <OneThirty/>
              </Route>
              <Route path="/Two">
                <Two/>
              </Route>
              <Route path="/TwoThirty">
                <TwoThirty/>
              </Route>
              <Route path="/Three">
                <Three/>
              </Route>
              <Route path="/ThreeThirty">
                <ThreeThirty/>
              </Route>
              <Route path="/Four">
                <Four/>
              </Route>
              <Route path="/FourThirty">
                <FourThirty/>
              </Route>
              <Route path="/Five">
                <Five/>
              </Route>
              {/* <Route path=""component={Blog}/> */}
          </Switch>
      </div>
      </BrowserRouter>
    )
  }

}
export default Room;