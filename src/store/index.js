import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

// This is a middleware
// const logger = (store) => (next) => (action) => {
//     console.log('• An action to be dispatched •', action);
//     console.log('• Previous state •', store.getState());
//
//     next(action);
//
//     console.log('• Next state •', store.getState());
// };

// const middleware = [logger];

export default createStore(reducer, compose());