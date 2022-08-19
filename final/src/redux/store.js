import { configureStore } from '@reduxjs/toolkit';
// configureStore functoion will create a store that  holds the state and combine the reducers
// and build middleware 
import todoReducer from './todoSlice';
// this will allow us to link our store with our application
export default configureStore({
	// pass our reducers as objects and this object will hold our reducers
	reducer: {
		todos: todoReducer,
	},
});
