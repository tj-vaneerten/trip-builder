import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TripSelect extends Component {

    render() {
        const { trips, selectTrip } = this.props
        if (trips) {
            return (
                <select onChange={(e) => selectTrip(e.target.value)}>
                    <option>Select trip</option>
                    {Object.keys(trips).map((key) => (
                        <option key={key} value={key}>{trips[key].name}</option>
                    ))}
                </select>
            )
        }

        return (
            <p>No trips created yet</p>
        )
    }

}

TripSelect.propTypes = {
    trips: PropTypes.object.isRequired,
    selectTrip: PropTypes.func.isRequired
}

export default TripSelect