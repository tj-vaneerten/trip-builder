import { connect } from 'react-redux'
import Map from '../components/Map'
import { updateDestination, deleteDestination } from "../actions";
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ directions, selectedDestination, selectedTrip, entities }) => {
    return {
        directions,
        selectedTrip: entities.trips.byId[selectedTrip],
        selectedDestination: entities.destinations.byId[selectedDestination]
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({updateDestination, deleteDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Map);