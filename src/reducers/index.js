import { combineReducers } from 'redux'
import selectedTrip from './selected_trip_reducer'
import trips from './trips_reducer'
import directions from './directions_reducer'

export default combineReducers({
    trips,
    selectedTrip,
    directions
})
