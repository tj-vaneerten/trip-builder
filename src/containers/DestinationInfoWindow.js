import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDestination, deleteDestination, addBudgetItem } from "../actions";
import DestinationInfoWindow from '../components/DestinationInfoWindow';

const mapStateToProps = ({selectedDestination, selectedTrip, entities}) => ({
    selectedTrip: entities.trips.byId[selectedTrip],
    selectedDestination: entities.destinations.byId[selectedDestination],
    budgetItems: entities.destinations.byId[selectedDestination].budgetItems.map(budgetItemId => (
        entities.budgetItems.byId[budgetItemId]
    ))
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({updateDestination, deleteDestination, addBudgetItem}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DestinationInfoWindow);