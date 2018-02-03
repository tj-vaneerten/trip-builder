import { connect } from 'react-redux'
import TripTimeline from '../components/Timeline'
import { createListOfTimelineItems } from "../utils";
import { bindActionCreators } from 'redux';
import { selectDestination } from "../actions";

const mapStateToProps = ({ entities, selectedTrip, directions }) => {
    const trip = entities.trips.byId[selectedTrip];
    const destinations = trip.destinations.map(destinationId => (entities.destinations.byId[destinationId]));
    return {
        selectedTrip,
        timelineList: createListOfTimelineItems(destinations, directions)
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({selectDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TripTimeline);