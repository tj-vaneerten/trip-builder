import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDestination, fetchDirections } from '../actions'
import TripDetails from '../components/TripDetails'

const mapStateToProps = ({ selectedTrip, directions }) => ({
    selectedTrip,
    directions
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ addDestination, fetchDirections }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)