import { combineReducers } from 'redux'
import selectedTrip from './selected_trip_reducer'
import trips from './trips_reducer'

export default combineReducers({
    trips,
    selectedTrip
})
