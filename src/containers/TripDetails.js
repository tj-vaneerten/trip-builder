import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDestination } from '../actions'
import TripDetails from '../components/TripDetails'

const mapStateToProps = ({ entities, selectedTrip, directions }) => ({
    trip: entities.trips.byId[selectedTrip],
    directions
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ addDestination }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails)