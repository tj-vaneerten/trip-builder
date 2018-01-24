import { connect } from 'react-redux'
import TripTimeline from '../components/TripTimeline'

const mapStateToProps = ({ directions }) => ({ directions });

export default connect(mapStateToProps)(TripTimeline);