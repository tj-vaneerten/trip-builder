import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DestinationForm from './DestinationForm'

class TripDetails extends Component {

    render() {
        const trip = this.props.selectedTrip

        if (trip) {
            return (
                <div>
                    <h3>{trip.name}</h3>
                    <DestinationForm destinations={trip.destinations} addDestination={this.props.addDestination} />
                    <ul>
                        {Object.keys(trip.destinations).map((destinationId) => {
                            const destination = trip.destinations[destinationId];
                            return (
                                <li key={destination.sequence}>{destination.name}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }

        return (
            <p>No trip selected</p>
        )
    }

}

TripDetails.propTypes = {
    selectedTrip: PropTypes.object
}

export default TripDetails