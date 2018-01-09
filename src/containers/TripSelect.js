import { connect } from 'react-redux'
import TripSelect from '../components/TripSelect'
import { selectTrip } from '../actions'

const mapStateToProps = state => ({
    trips: state.trips
})

export default connect(mapStateToProps, {selectTrip})(TripSelect)