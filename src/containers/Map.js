import { connect } from 'react-redux'
import Map from '../components/Map'
import { updateDestination } from "../actions";
import { bindActionCreators } from 'redux';
import { createListOfDestinations } from '../utils'

const mapStateToProps = ({ selectedTrip, directions, selectedDestination }) => ({
    destinations: createListOfDestinations(selectedTrip),
    directions,
    selectedDestination: selectedTrip.destinations[selectedDestination]
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({updateDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);