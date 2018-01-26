import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDirections } from '../actions'
import Map from '../components/Map'
import { createListOfDestinations } from '../utils'

const mapStateToProps = ({ selectedTrip, directions, selectedDestination }) => ({
    destinations: createListOfDestinations(selectedTrip),
    directions,
    selectedDestination: selectedTrip.destinations[selectedDestination]
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchDirections }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map)