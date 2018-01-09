import { connect } from 'react-redux'
import TripDetails from '../components/TripDetails'

const mapStateToProps = ({ selectedTrip }) => ({
    selectedTrip
})

export default connect(mapStateToProps)(TripDetails)