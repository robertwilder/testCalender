import React from 'react';
import '../src/App.css';
import Room from './components/Room'

class App extends React.Component{
  render() {
    return(
   <div>
<h1 className="titleCard">Room Booking System</h1>

<div className="boxbox">
  <h1>Room 1</h1>
     <Room/>
</div>
<div className="boxbox">
  <h1>Room 2</h1>
     <Room/>
</div>
 
   </div>
    )
  }

}
export default App;
