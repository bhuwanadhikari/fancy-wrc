import { combineReducers } from 'redux';

const INITIAL_STATE = {
};

const  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case 'UPDATE_MARKSENTRY':
            return {
                ...state,
                syncStatus: {
                    ...state.syncStatus,
                    marksEntry: action.payload
                }
            }

        default:
            return state
    }
};

export default combineReducers({
    sync: updateSyncState,
});