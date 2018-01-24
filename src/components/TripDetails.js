import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DestinationForm from '../containers/DestinationForm'
import Map from '../containers/Map'
import Timeline from '../containers/Timeline'

class TripDetails extends Component {

    render() {
        const trip = this.props.selectedTrip;

        if (trip) {
            return (
                <div>
                    <h3>{trip.name}</h3>
                    <DestinationForm />
                    <div className='row'>
                        <div className='col-lg-9'>
                            <Map />
                        </div>
                        <div className='col-lg-3'>
                            <Timeline />
                        </div>
                    </div>
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