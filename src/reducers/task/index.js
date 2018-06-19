import types from 'actions/task/types';
import { List, Map } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_TASK:
            return state.push(Map(action.payload));

        case types.DELETE_TASK:
            return state.delete(action.payload);

        default:
            return state;
    }
}