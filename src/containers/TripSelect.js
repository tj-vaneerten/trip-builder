import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TripSelect from '../components/TripSelect';
import { selectTrip } from '../actions';

const mapStateToProps = ({entities}) => ({
    trips: entities.trips.allTrips.map(tripId => (entities.trips.byId[tripId]))
});

const mapDipatchToProps = dispatch => (
    bindActionCreators({selectTrip}, dispatch)
);

export default connect(mapStateToProps, mapDipatchToProps)(TripSelect)