import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = ({ directions, selectedDestination, selectedTrip, entities }) => {
    return {
        directions,
        selectedDestination: entities.destinations.byId[selectedDestination]
    };
};

export default connect(mapStateToProps)(Map);