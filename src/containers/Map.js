import { connect } from 'react-redux'
import Map from '../components/Map'
import { updateDestination, deleteDestination } from "../actions";
import { bindActionCreators } from 'redux';
import { createListOfDestinations } from '../utils'

const mapStateToProps = ({ selectedTrip, directions, selectedDestination }) => {
    return {
        destinations: createListOfDestinations(selectedTrip),
        directions,
        selectedDestination: selectedTrip.destinations[selectedDestination]
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({updateDestination, deleteDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);