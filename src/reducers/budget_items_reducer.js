import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    return state;
};

const allBudgetItems = (state = [], action) => {
    return state;
};

export default combineReducers({
    byId,
    allBudgetItems
});