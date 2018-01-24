import React, { Component } from 'react';
import '../App.css';
import TripSelect from '../containers/TripSelect'
import TripDetails from '../containers/TripDetails'

class App extends Component {
  render() {
    return (
        <div className='container'>
            <TripSelect/>
            <hr />
            <TripDetails/>
        </div>
    );
  }
}

export default App;
