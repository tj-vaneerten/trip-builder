import { connect } from 'react-redux'
import TripTimeline from '../components/Timeline'
import { createListOfTimelineItems } from "../utils";
import { bindActionCreators } from 'redux';
import { selectDestination } from "../actions";

const mapStateToProps = ({ selectedTrip, directions }) => ({
    timelineList: createListOfTimelineItems(selectedTrip, directions)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({selectDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TripTimeline);