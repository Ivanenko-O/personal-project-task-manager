import types from './types';

export default Object.freeze({
    addTask: (msg) => ({
        type:    types.ADD_TASK,
        payload: msg,
    }),

    deleteTask: (id) => ({
        type:    types.DELETE_TASK,
        payload: id,
    }),

    editTask: (task) => ({
        type:    types.EDIT_TASK,
        payload: task,
    }),
})