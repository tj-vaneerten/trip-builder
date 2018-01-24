import { connect } from 'react-redux'
import TripTimeline from '../components/Timeline'
import { createListOfTimelineItems } from "../utils";

const mapStateToProps = ({ selectedTrip, directions }) => ({
    timelineList: createListOfTimelineItems(selectedTrip, directions)
});

export default connect(mapStateToProps)(TripTimeline);