import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DestinationForm from './DestinationForm'
import MapView from '../containers/MapView'

class TripDetails extends Component {

    render() {
        const trip = this.props.selectedTrip;

        if (trip) {
            return (
                <div>
                    <h3>{trip.name}</h3>
                    <DestinationForm lastDestination={trip.lastDestination} addDestination={this.props.addDestination} />
                    <MapView />
                </div>
            )
        }

        return (
            <p>No trip selected</p>
        )
    }

}

TripDetails.propTypes = {
    selectedTrip: PropTypes.object,
    directions: PropTypes.object
}

export default TripDetails