import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TripSelect extends Component {

    render() {
        const { trips, selectTrip } = this.props
        if (trips) {
            return (
                <div className='row'>
                    <div className='col-lg-3'>
                        <select className='form-control' onChange={(e) => selectTrip(e.target.value)}>
                            <option>Select trip</option>
                            {Object.keys(trips).map((key) => (
                                <option key={key} value={key}>{trips[key].name}</option>
                            ))}
                        </select>
                    </div>
                </div>
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