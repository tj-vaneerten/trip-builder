import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DestinationForm from '../components/DestinationForm'
import { addDestination } from "../actions";

const mapStateToProps = ({ selectedTrip }) => ({
    lastDestination: selectedTrip.lastDestination
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({addDestination}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DestinationForm);