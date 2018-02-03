import { combineReducers } from 'redux';
import trips from './trips_reducer';
import destinations from './destinations_reducer';
import budgetItems from './budget_items_reducer';
import selectedTrip from './selected_trip_reducer';
import selectedDestination from './selected_destination_reducer';
import directions from './directions_reducer';

const entities = combineReducers({
    trips,
    destinations,
    budgetItems
});

export default combineReducers({
    entities,
    selectedTrip,
    selectedDestination,
    directions
})
