import { combineReducers } from 'redux';
import {ADD_BUDGET_ITEM} from "../actions";

const byId = (state = {}, action) => {
    switch(action.type) {
        case ADD_BUDGET_ITEM:
            return {
                ...state,
                [action.payload.budgetItem.id]: action.payload.budgetItem
            };
        default:
            return state;
    }
};

const allBudgetItems = (state = [], action) => {
    switch(action.type) {
        case ADD_BUDGET_ITEM:
            return [...state, action.payload.budgetItem.id];
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allBudgetItems
});