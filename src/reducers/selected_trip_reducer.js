import { SELECT_TRIP } from '../actions'

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_TRIP:
            return action.selectedTrip
        default:
            return state
    }
}